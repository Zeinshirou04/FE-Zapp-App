import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <section id="contact" className="bg-zapp-ink py-24 px-16">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <span className="font-sans text-sm font-medium text-volt-light uppercase tracking-widest">
            Get in touch
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-6 leading-tight">
            Let's build something
            <br />
            <span className="text-volt-light">together.</span>
          </h2>
          <p className="font-sans text-white/60 leading-relaxed mb-10">
            Have a project in mind? Tell us what you need and we'll get back to
            you as soon as possible with a quote and timeline.
          </p>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:Farras.FF6@gmail.com"
              className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-xl px-6 py-4"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-white h-7" />
              <div>
                <div className="font-sans text-xs text-white/40 mb-0.5">
                  Email us
                </div>
                <div className="font-sans text-sm font-medium text-white">
                  Farras.FF6@gmail.com
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/6285183266907"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-xl px-6 py-4"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-white h-7" />
              <div>
                <div className="font-sans text-xs text-white/40 mb-0.5">
                  WhatsApp
                </div>
                <div className="font-sans text-sm font-medium text-white">
                  Chat with us
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
