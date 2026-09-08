import useInView from '../hooks/useInView.js'

export default function Reveal({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`reveal${inView ? ' reveal-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
