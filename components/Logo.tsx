interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'icon' | 'full'
}

export default function Logo({ className = '', size = 'md', variant = 'icon' }: LogoProps) {
  const sizeClasses = {
    sm: variant === 'full' ? 'h-8' : 'w-8 h-8',
    md: variant === 'full' ? 'h-12' : 'w-12 h-12',
    lg: variant === 'full' ? 'h-16' : 'w-16 h-16'
  }

  if (variant === 'full') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <img 
          src="/habitable-logo.svg" 
          alt="Habitable Logo"
          className="w-auto h-full object-contain"
        />
      </div>
    )
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img 
        src="/habitable-icon.svg" 
        alt="Habitable Icon"
        className="w-full h-full object-contain"
      />
    </div>
  )
}
