export default function Robots() {
  return new Response(
    `User-agent: *
  Allow: /`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
