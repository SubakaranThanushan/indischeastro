import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:ring-accent/20",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 focus-visible:ring-secondary/20",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 focus-visible:ring-accent/20",
        link: "text-primary underline-offset-4 hover:underline focus-visible:ring-primary/20",
        // Nouveau variant pour les CTA SEO
        seo: "bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white shadow-lg hover:shadow-xl hover:from-[#ff5a40] hover:to-[#ff7a40] focus-visible:ring-[#ff6e54]/30 transform hover:-translate-y-0.5 transition-all duration-300 font-semibold",
        // Variant pour les actions importantes
        featured: "bg-gradient-to-r from-[#260C56] to-[#4c1d95] text-white shadow-md hover:shadow-lg hover:from-[#3a1a7a] hover:to-[#5c2ba3] focus-visible:ring-[#260C56]/30"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-lg px-8 text-base has-[>svg]:px-6 font-semibold", // Taille supplémentaire pour les CTA
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  /**
   * Texte accessible pour les lecteurs d'écran
   */
  ariaLabel?: string
  /**
   * Indique l'objectif du bouton pour le SEO sémantique
   */
  purpose?: "navigation" | "submit" | "contact" | "booking" | "learn-more"
  /**
   * ID pour le tracking analytics
   */
  trackingId?: string
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ariaLabel,
  purpose,
  trackingId,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  // Gestionnaire de clic amélioré pour le tracking
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Tracking analytics (à implémenter avec votre solution)
    if (trackingId) {
      console.log(`Button clicked: ${trackingId}`)
      // Exemple: gtag('event', 'click', { 'button_id': trackingId })
    }

    // Logique métier basée sur le purpose
    if (purpose === "contact") {
      console.log("Contact CTA clicked - Vedische Astrologie Beratung")
    } else if (purpose === "booking") {
      console.log("Booking CTA clicked - Termin vereinbaren")
    }

    // Appel du onClick original
    if (onClick) {
      onClick(event)
    }
  }

  // Attributs ARIA en fonction du purpose
  const getAriaAttributes = () => {
    const attributes: Record<string, string> = {}
    
    if (ariaLabel) {
      attributes['aria-label'] = ariaLabel
    }
    
    if (purpose) {
      attributes['data-purpose'] = purpose
    }
    
    switch (purpose) {
      case 'contact':
        attributes['aria-label'] = ariaLabel || 'Kontaktieren Sie uns für Vedische Astrologie Beratung'
        break
      case 'booking':
        attributes['aria-label'] = ariaLabel || 'Termin für Vedische Astrologie Beratung vereinbaren'
        break
      case 'navigation':
        attributes['aria-label'] = ariaLabel || 'Navigation'
        break
      case 'learn-more':
        attributes['aria-label'] = ariaLabel || 'Mehr erfahren über Vedische Astrologie'
        break
    }
    
    return attributes
  }

  return (
    <Comp
      data-slot="button"
      data-seo-purpose={purpose}
      data-tracking-id={trackingId}
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={handleClick}
      {...getAriaAttributes()}
      {...props}
    >
      {children}
    </Comp>
  )
}

// Composant spécialisé pour les CTA de contact
const ContactButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant' | 'purpose'>>(
  ({ children = "Kostenlose Beratung", ...props }, ref) => (
    <Button
      ref={ref}
      variant="seo"
      size="xl"
      purpose="contact"
      trackingId="contact-cta-main"
      ariaLabel="Kostenlose Vedische Astrologie Beratung vereinbaren"
      {...props}
    >
      📞 {children}
    </Button>
  )
)
ContactButton.displayName = "ContactButton"

// Composant spécialisé pour les réservations
const BookingButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant' | 'purpose'>>(
  ({ children = "Termin buchen", ...props }, ref) => (
    <Button
      ref={ref}
      variant="featured"
      size="lg"
      purpose="booking"
      trackingId="booking-cta-main"
      ariaLabel="Termin für Vedische Astrologie Beratung buchen"
      {...props}
    >
      📅 {children}
    </Button>
  )
)
BookingButton.displayName = "BookingButton"

// Composant pour les liens de navigation importants
const NavigationButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant' | 'purpose'>>(
  ({ children, ...props }, ref) => (
    <Button
      ref={ref}
      variant="outline"
      purpose="navigation"
      ariaLabel={typeof children === 'string' ? `Navigation: ${children}` : undefined}
      {...props}
    >
      {children}
    </Button>
  )
)
NavigationButton.displayName = "NavigationButton"

export { 
  Button, 
  buttonVariants, 
  ContactButton, 
  BookingButton, 
  NavigationButton 
}