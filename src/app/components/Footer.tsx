// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-6 text-center border-t border-gray-200 mt-12">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} AntonioDev. Diseñado y desarrollado por Ti.&nbsp;
        <span className="text-yellow-600">All rights reserved.</span>
      </p>
    </footer>
  )
}
