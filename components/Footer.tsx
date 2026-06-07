    <div className="mb-20">
      <h2
        className="font-light tracking-tight text-black"
        style={{
          fontSize: 'clamp(3rem, 8vw, 8rem)',
          lineHeight: 0.9,
        }}
      >
        Let's create
        <br />
        something memorable.
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-12 md:gap-20">

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
          Contact
        </p>

        <div className="space-y-2">
          <a
            href="mailto:patelkashyap11@gmail.com"
            className="block text-black hover:opacity-60 transition-opacity"
          >
            patelkashyap11@gmail.com
          </a>

          <a
            href="tel:+919712727007"
            className="block text-black hover:opacity-60 transition-opacity"
          >
            +91 97127 27007
          </a>
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
          Social
        </p>

        <div className="space-y-2">
          <a
            href="https://instagram.com/ikashyap__"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-black hover:opacity-60 transition-opacity"
          >
            Instagram ↗
          </a>

          <a
            href="https://wa.me/919712727007"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-black hover:opacity-60 transition-opacity"
          >
            WhatsApp ↗
          </a>
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
          Location
        </p>

        <p className="text-black">
          Ahmedabad, India
          <br />
          Available Worldwide
        </p>
      </div>

    </div>

    <div className="mt-20 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between gap-4">

      <p className="text-sm text-black/40">
        © {new Date().getFullYear()} Kashyap Patel
      </p>

      <p className="text-sm text-black/40">
        Photographer & Filmmaker
      </p>

    </div>

  </div>
</footer>
