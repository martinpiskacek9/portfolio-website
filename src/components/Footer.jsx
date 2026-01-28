import ScrollToTopButton from './ScrollToTopButton'

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-18 px-6 md:px-26">
      <div className="border-t border-neutral-500/50 w-full h-full flex items-center justify-between pt-12 font-montserrat text-sm">
        <p>&copy; Martin Piskáček 2026</p>
        <ScrollToTopButton />
      </div>
    </footer>
  )
}

export default Footer
