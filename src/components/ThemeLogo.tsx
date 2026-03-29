type ThemeLogoProps = {
  alt: string;
  className?: string;
};

export default function ThemeLogo({ alt, className = "" }: ThemeLogoProps) {
  return (
    <>
      <img
        src="/logo-light.svg"
        className={`dark:hidden ${className}`.trim()}
        alt={alt}
      />
      <img
        src="/logo-dark.svg"
        className={`hidden dark:block ${className}`.trim()}
        alt={alt}
      />
    </>
  );
}
