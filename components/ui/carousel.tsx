"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  /**
   * ID unique pour le tracking SEO
   */
  carouselId?: string;
  /**
   * Description sémantique pour l'accessibilité
   */
  ariaDescription?: string;
  /**
   * Étiquette pour les lecteurs d'écran
   */
  ariaLabel?: string;
  /**
   * Auto-play configuration
   */
  autoplay?: boolean;
  autoplayDelay?: number;
  /**
   * Configuration du tracking
   */
  trackInteractions?: boolean;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  currentSlide: number;
  totalSlides: number;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  carouselId,
  ariaDescription,
  ariaLabel,
  autoplay = false,
  autoplayDelay = 5000,
  trackInteractions = true,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      loop: opts?.loop ?? true, // Par défaut en loop pour une meilleure UX
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [totalSlides, setTotalSlides] = React.useState(0);

  // Génération d'un ID unique si non fourni
  const generatedId = React.useId();
  const uniqueCarouselId = carouselId || `carousel-${generatedId}`;

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setCurrentSlide(api.selectedScrollSnap());
    setTotalSlides(api.scrollSnapList().length);
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
    // Tracking de l'interaction
    if (trackInteractions) {
      console.log(`Carousel ${uniqueCarouselId}: Previous slide`);
      // gtag('event', 'carousel_interaction', {
      //   carousel_id: uniqueCarouselId,
      //   action: 'previous',
      //   slide_number: currentSlide
      // });
    }
  }, [api, trackInteractions, uniqueCarouselId, currentSlide]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
    // Tracking de l'interaction
    if (trackInteractions) {
      console.log(`Carousel ${uniqueCarouselId}: Next slide`);
      // gtag('event', 'carousel_interaction', {
      //   carousel_id: uniqueCarouselId,
      //   action: 'next',
      //   slide_number: currentSlide
      // });
    }
  }, [api, trackInteractions, uniqueCarouselId, currentSlide]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      } else if (event.key === "Home") {
        event.preventDefault();
        api?.scrollTo(0);
      } else if (event.key === "End") {
        event.preventDefault();
        api?.scrollTo(totalSlides - 1);
      }
    },
    [scrollPrev, scrollNext, api, totalSlides]
  );

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoplay || !api) return;

    const autoplayInterval = setInterval(() => {
      if (api.canScrollNext()) {
        scrollNext();
      } else {
        api.scrollTo(0); // Retour au début si à la fin
      }
    }, autoplayDelay);

    return () => clearInterval(autoplayInterval);
  }, [autoplay, autoplayDelay, api, scrollNext]);

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    // Initialisation du nombre total de slides
    setTotalSlides(api.scrollSnapList().length);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  // Tracking du chargement du carousel
  React.useEffect(() => {
    if (trackInteractions && api) {
      console.log(`Carousel ${uniqueCarouselId}: Loaded with ${totalSlides} slides`);
      // gtag('event', 'carousel_loaded', {
      //   carousel_id: uniqueCarouselId,
      //   total_slides: totalSlides,
      //   orientation: orientation
      // });
    }
  }, [api, totalSlides, uniqueCarouselId, trackInteractions, orientation]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        currentSlide,
        totalSlides,
        carouselId: uniqueCarouselId,
        ariaDescription,
        ariaLabel,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel || "Image carousel"}
        aria-describedby={ariaDescription ? `${uniqueCarouselId}-description` : undefined}
        data-slot="carousel"
        data-carousel-id={uniqueCarouselId}
        data-total-slides={totalSlides}
        {...props}
      >
        {ariaDescription && (
          <div id={`${uniqueCarouselId}-description`} className="sr-only">
            {ariaDescription}
          </div>
        )}
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation, carouselId } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
      data-carousel-id={carouselId}
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ 
  className, 
  /**
   * Index du slide pour l'accessibilité
   */
  slideIndex,
  /**
   * Description spécifique au slide
   */
  slideDescription,
  ...props 
}: React.ComponentProps<"div"> & {
  slideIndex?: number;
  slideDescription?: string;
}) {
  const { orientation, currentSlide, totalSlides, carouselId } = useCarousel();
  const itemRef = React.useRef<HTMLDivElement>(null);

  // Déterminer l'index réel du slide
  const actualIndex = slideIndex ?? React.Children.toArray(props.children).indexOf(props.children as React.ReactElement);

  // État d'accessibilité
  const isActive = actualIndex === currentSlide;

  return (
    <div
      ref={itemRef}
      role="group"
      aria-roledescription="slide"
      aria-label={`Slide ${actualIndex + 1} of ${totalSlides}`}
      aria-describedby={slideDescription ? `${carouselId}-slide-${actualIndex}-desc` : undefined}
      data-slot="carousel-item"
      data-slide-index={actualIndex}
      data-active={isActive}
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    >
      {slideDescription && (
        <div id={`${carouselId}-slide-${actualIndex}-desc`} className="sr-only">
          {slideDescription}
        </div>
      )}
      {props.children}
    </div>
  );
}

// Nouveau composant pour la navigation du carousel
function CarouselNavigation({ 
  className,
  showLabels = true,
  variant = "dots" as "dots" | "buttons",
  ...props 
}: React.ComponentProps<"div"> & {
  showLabels?: boolean;
  variant?: "dots" | "buttons";
}) {
  const { 
    scrollPrev, 
    scrollNext, 
    canScrollPrev, 
    canScrollNext, 
    currentSlide, 
    totalSlides,
    carouselId 
  } = useCarousel();

  if (variant === "buttons") {
    return (
      <div
        className={cn("flex items-center justify-center gap-4 mt-4", className)}
        data-slot="carousel-navigation"
        {...props}
      >
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Previous slide"
          aria-controls={carouselId}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ←
        </button>
        
        {showLabels && (
          <span className="text-sm text-gray-600 min-w-[80px] text-center">
            {currentSlide + 1} / {totalSlides}
          </span>
        )}
        
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next slide"
          aria-controls={carouselId}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          →
        </button>
      </div>
    );
  }

  // Variant dots par défaut
  return (
    <div
      className={cn("flex items-center justify-center gap-2 mt-4", className)}
      data-slot="carousel-navigation"
      role="tablist"
      aria-label="Carousel navigation"
      {...props}
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => useCarousel().api?.scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-selected={index === currentSlide}
          role="tab"
          className={cn(
            "w-3 h-3 rounded-full transition-all",
            index === currentSlide 
              ? "bg-[#ff6e54] scale-110" 
              : "bg-gray-300 hover:bg-gray-400"
          )}
        />
      ))}
    </div>
  );
}

// Composant pour les indicateurs de progression
function CarouselProgress({ className, ...props }: React.ComponentProps<"div">) {
  const { currentSlide, totalSlides } = useCarousel();
  
  const progress = totalSlides > 0 ? ((currentSlide + 1) / totalSlides) * 100 : 0;

  return (
    <div
      className={cn("w-full bg-gray-200 rounded-full h-2 mt-4", className)}
      role="progressbar"
      aria-valuenow={currentSlide + 1}
      aria-valuemin={1}
      aria-valuemax={totalSlides}
      aria-label={`Slide ${currentSlide + 1} of ${totalSlides}`}
      data-slot="carousel-progress"
      {...props}
    >
      <div
        className="bg-[#ff6e54] h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export { 
  type CarouselApi, 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNavigation,
  CarouselProgress 
};