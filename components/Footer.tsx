"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#173f35] text-[#f1f6f4] font-be-vietnam">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        {/* Top Section: Logo, Quote, Gift Button */}
        <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-between gap-6 md:gap-8 mb-1">
          {/* Main Logo - First on mobile, left on desktop */}
          <div className="shrink-0 order-1 md:order-none">
            <Image
              unoptimized
              src="/Footer-logo.png"
              alt="CNCF Logo"
              width={200}
              height={200}
            />
          </div>

          {/* Centered Quote - Third on mobile, center on desktop */}
          <div className="mt-4 md:mt-0 flex-1 text-center md:text-center lg:text-center order-3 md:order-0 w-full md:w-auto">
            <h2 className="font-lobster text-xl sm:text-2xl leading-tight bg-linear-to-r from-[#FBE67B] to-[#FCFBE7] bg-clip-text text-transparent">
              Together, Let&apos;s Make This Christmas Brighter.
            </h2>
            <p className="font-lobster text-xl sm:text-2xl leading-tight mt-1 bg-linear-to-r from-[#FBE67B] to-[#FCFBE7] bg-clip-text text-transparent">
              Sharing the joy, spreading the magic.
            </p>

            {/* <button
            onClick={() => window.open("https://www.cncf.org/donate", "_blank")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.opacity = "1";
            }}
            className="shrink-0 mt-5"
          >
            <Image
              unoptimized
              src="/Gift-10-button.svg" 
              alt="Gift $10 Gift"
              width={200}
              height={200}
            />
          </button> */}
            <button
              style={{
                background:
                  "linear-gradient(to bottom, #EF4444 0%, #B91C1C 100%)",
                borderRadius: "20px",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                border: "4px solid transparent",
                backgroundImage:
                  "linear-gradient(to bottom, #EF4444 0%, #B91C1C 100%), linear-gradient(to bottom, #8C421D 0%, #FBE67B 25%, #FCFBE7 50%, #F7D14E 75%, #D4A041 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                color: "white",
                fontSize: "16px",
                // fontFamily: "var(--font-be-vietnam)",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              className="py-2 px-6 mt-8 mb-4 font-be-vietnam"
              onClick={() =>
                window.open("https://www.cncf.org/donate", "_blank")
              }
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0px 8px 16px 0px rgba(0, 0, 0, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
              }}
            >
              Give A Christmas Gift
            </button>
          </div>

          {/* Certified Logo - Second on mobile, right on desktop */}
          <div className="shrink-0 order-2 md:order-none">
            <Image
              unoptimized
              src="/Footer-certified.png"
              alt="CNCF Certified"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Main Content: Contact, About, Get Involved, Resources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 mt-8">
          {/* Contact Us - Spans 2 columns on desktop */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-white text-lg mb-3 text-center sm:text-left">
              Contact Us
            </h3>

            {/* Two column layout for Vietnam and Mongolia on desktop, single column on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Vietnam */}
              <div>
                <h4 className="font-semibold text-white text-md mb-2 text-center lg:text-left">
                  VIETNAM
                </h4>
                <ul className="space-y-2 text-sm text-[#c9d3cb] text-center lg:text-left">
                  <li className="flex items-start justify-center lg:justify-start gap-2">
                    <span className="mt-1 shrink-0">
                      <svg
                        width="16"
                        height="21"
                        viewBox="0 0 16 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C6.90278 0 5.86806 0.205078 4.89583 0.615234C3.92361 1.02539 3.07292 1.58936 2.34375 2.30713C1.61458 3.0249 1.04167 3.8623 0.625 4.81934C0.208333 5.77637 0 6.79492 0 7.875C0 9.32422 0.388889 10.8076 1.16667 12.3252C1.93056 13.8291 2.78472 15.2031 3.72917 16.4473C4.67361 17.6914 5.54861 18.7236 6.35417 19.5439C7.17361 20.3643 7.61806 20.8086 7.6875 20.877C7.72917 20.918 7.77778 20.9487 7.83333 20.9692C7.88889 20.9897 7.94444 21 8 21C8.05556 21 8.11111 20.9897 8.16667 20.9692C8.22222 20.9487 8.27083 20.918 8.3125 20.877C8.38194 20.8086 8.82639 20.3643 9.64583 19.5439C10.4514 18.7236 11.3264 17.6914 12.2708 16.4473C13.2153 15.2031 14.0694 13.8291 14.8333 12.3252C15.6111 10.8076 16 9.32422 16 7.875C16 6.79492 15.7917 5.77637 15.375 4.81934C14.9583 3.8623 14.3854 3.0249 13.6562 2.30713C12.9271 1.58936 12.0764 1.02539 11.1042 0.615234C10.1319 0.205078 9.09722 0 8 0ZM8 12.2432C7.38889 12.2432 6.8125 12.1338 6.27083 11.915C5.72917 11.6826 5.25694 11.3682 4.85417 10.9717C4.45139 10.5752 4.13194 10.1104 3.89583 9.57715C3.67361 9.04395 3.5625 8.47656 3.5625 7.875C3.5625 7.27344 3.67361 6.70605 3.89583 6.17285C4.13194 5.63965 4.45139 5.1748 4.85417 4.77832C5.25694 4.38184 5.72917 4.06738 6.27083 3.83496C6.8125 3.61621 7.38889 3.50684 8 3.50684C8.61111 3.50684 9.1875 3.61621 9.72917 3.83496C10.2708 4.06738 10.7431 4.38184 11.1458 4.77832C11.5486 5.1748 11.8681 5.63965 12.1042 6.17285C12.3264 6.70605 12.4375 7.27344 12.4375 7.875C12.4375 8.47656 12.3264 9.04395 12.1042 9.57715C11.8681 10.1104 11.5486 10.5752 11.1458 10.9717C10.7431 11.3682 10.2708 11.6826 9.72917 11.915C9.1875 12.1338 8.61111 12.2432 8 12.2432Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=165A%20Nguyen%20Van%20Huong%20An%20Kh%C3%A1nh%20Ho%20Chi%20Minh%20City%20Vietnam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      165A Nguyen Van Huong, An Khánh Ward, HCMC, Vietnam
                    </a>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="shrink-0">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 15.0112C19 15.2472 18.9528 15.5619 18.8584 15.9553C18.764 16.3487 18.6696 16.6555 18.5752 16.8758C18.3863 17.3321 17.8356 17.812 16.923 18.3155C16.0733 18.7718 15.2393 19 14.4211 19C14.1694 19 13.9333 18.9843 13.713 18.9528C13.477 18.9213 13.2174 18.8663 12.9342 18.7876C12.6509 18.6932 12.4385 18.6224 12.2969 18.5752C12.1553 18.528 11.9035 18.4414 11.5416 18.3155C11.1797 18.1739 10.9594 18.0874 10.8807 18.0559C9.99959 17.7412 9.21284 17.3714 8.5205 16.9466C7.38758 16.2385 6.19959 15.2629 4.95652 14.0199C3.72919 12.7925 2.76149 11.6124 2.05342 10.4795C1.61284 9.78716 1.2352 9.00041 0.920497 8.11926C0.904762 8.02485 0.826087 7.80455 0.684472 7.45839C0.558592 7.09648 0.464182 6.84472 0.401242 6.70311C0.354037 6.56149 0.291097 6.34907 0.212422 6.06584C0.133747 5.78261 0.0786749 5.52298 0.047205 5.28696C0.015735 5.05093 0 4.81491 0 4.57888C0 3.74493 0.228157 2.91097 0.684472 2.07702C1.18799 1.16439 1.66791 0.613665 2.12422 0.424845C2.34451 0.330435 2.65135 0.236025 3.04472 0.141615C3.4381 0.047205 3.75279 0 3.98882 0C4.1147 0 4.20911 0.0157356 4.27205 0.047205C4.4294 0.0944099 4.66542 0.432713 4.98012 1.06211C5.09027 1.2352 5.23188 1.47909 5.40497 1.79379C5.56232 2.10849 5.71967 2.39172 5.87702 2.64348C6.01863 2.91097 6.15238 3.15487 6.27826 3.37516C6.30973 3.40663 6.38841 3.51677 6.51429 3.70559C6.6559 3.89441 6.75818 4.05963 6.82112 4.20124C6.88406 4.32712 6.91553 4.453 6.91553 4.57888C6.91553 4.75197 6.78178 4.97226 6.51429 5.23975C6.26253 5.52298 5.98716 5.77474 5.6882 5.99503C5.38923 6.21532 5.106 6.45135 4.83851 6.70311C4.58675 6.95487 4.46087 7.15942 4.46087 7.31677C4.46087 7.41118 4.48447 7.51346 4.53168 7.6236C4.57888 7.74948 4.61822 7.84389 4.64969 7.90683C4.68116 7.96977 4.7441 8.07992 4.83851 8.23727C4.93292 8.37888 4.98012 8.46542 4.98012 8.49689C5.67246 9.72422 6.45921 10.7785 7.34037 11.6596C8.22153 12.5408 9.27578 13.3197 10.5031 13.9963C10.5188 14.012 10.6054 14.0671 10.7627 14.1615C10.9201 14.2559 11.0302 14.3188 11.0932 14.3503C11.1561 14.3818 11.2427 14.4211 11.3528 14.4683C11.4787 14.5155 11.581 14.5391 11.6596 14.5391C11.8327 14.5391 12.0451 14.4054 12.2969 14.1379C12.5487 13.8861 12.7847 13.6108 13.005 13.3118C13.2253 13.0128 13.4692 12.7296 13.7366 12.4621C14.0041 12.2104 14.2323 12.0845 14.4211 12.0845C14.547 12.0845 14.6729 12.1159 14.7988 12.1789C14.9246 12.2418 15.082 12.3362 15.2708 12.4621C15.4596 12.6037 15.5776 12.6824 15.6248 12.6981C15.8451 12.8398 16.0812 12.9814 16.3329 13.123C16.6004 13.2646 16.8915 13.4219 17.2062 13.595C17.5209 13.7681 17.7569 13.9019 17.9143 13.9963C18.5437 14.311 18.8899 14.5549 18.9528 14.728C18.9843 14.7909 19 14.8853 19 15.0112Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <a href="tel:+842839326484" className="hover:underline">
                      (+84) 283 932 6484
                    </a>
                  </li>
                </ul>
              </div>

              {/* Mongolia */}
              <div>
                <h4 className="font-semibold text-white text-md mb-2 text-center lg:text-left">
                  MONGOLIA
                </h4>
                <ul className="space-y-2 text-sm text-[#c9d3cb] text-center lg:text-left">
                  <li className="flex items-start justify-center lg:justify-start gap-2">
                    <span className="mt-1 shrink-0">
                      <svg
                        width="16"
                        height="21"
                        viewBox="0 0 16 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C6.90278 0 5.86806 0.205078 4.89583 0.615234C3.92361 1.02539 3.07292 1.58936 2.34375 2.30713C1.61458 3.0249 1.04167 3.8623 0.625 4.81934C0.208333 5.77637 0 6.79492 0 7.875C0 9.32422 0.388889 10.8076 1.16667 12.3252C1.93056 13.8291 2.78472 15.2031 3.72917 16.4473C4.67361 17.6914 5.54861 18.7236 6.35417 19.5439C7.17361 20.3643 7.61806 20.8086 7.6875 20.877C7.72917 20.918 7.77778 20.9487 7.83333 20.9692C7.88889 20.9897 7.94444 21 8 21C8.05556 21 8.11111 20.9897 8.16667 20.9692C8.22222 20.9487 8.27083 20.918 8.3125 20.877C8.38194 20.8086 8.82639 20.3643 9.64583 19.5439C10.4514 18.7236 11.3264 17.6914 12.2708 16.4473C13.2153 15.2031 14.0694 13.8291 14.8333 12.3252C15.6111 10.8076 16 9.32422 16 7.875C16 6.79492 15.7917 5.77637 15.375 4.81934C14.9583 3.8623 14.3854 3.0249 13.6562 2.30713C12.9271 1.58936 12.0764 1.02539 11.1042 0.615234C10.1319 0.205078 9.09722 0 8 0ZM8 12.2432C7.38889 12.2432 6.8125 12.1338 6.27083 11.915C5.72917 11.6826 5.25694 11.3682 4.85417 10.9717C4.45139 10.5752 4.13194 10.1104 3.89583 9.57715C3.67361 9.04395 3.5625 8.47656 3.5625 7.875C3.5625 7.27344 3.67361 6.70605 3.89583 6.17285C4.13194 5.63965 4.45139 5.1748 4.85417 4.77832C5.25694 4.38184 5.72917 4.06738 6.27083 3.83496C6.8125 3.61621 7.38889 3.50684 8 3.50684C8.61111 3.50684 9.1875 3.61621 9.72917 3.83496C10.2708 4.06738 10.7431 4.38184 11.1458 4.77832C11.5486 5.1748 11.8681 5.63965 12.1042 6.17285C12.3264 6.70605 12.4375 7.27344 12.4375 7.875C12.4375 8.47656 12.3264 9.04395 12.1042 9.57715C11.8681 10.1104 11.5486 10.5752 11.1458 10.9717C10.7431 11.3682 10.2708 11.6826 9.72917 11.915C9.1875 12.1338 8.61111 12.2432 8 12.2432Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Gerel+Centre+1/4+Jigjidjav+Street+Ulaanbaatar+15160"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Chin Van G. Chagdarjav Street, 1st Khoroo, Sukhbaatar
                      District, Ulaanbaatar 14220
                    </a>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="shrink-0">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 15.0112C19 15.2472 18.9528 15.5619 18.8584 15.9553C18.764 16.3487 18.6696 16.6555 18.5752 16.8758C18.3863 17.3321 17.8356 17.812 16.923 18.3155C16.0733 18.7718 15.2393 19 14.4211 19C14.1694 19 13.9333 18.9843 13.713 18.9528C13.477 18.9213 13.2174 18.8663 12.9342 18.7876C12.6509 18.6932 12.4385 18.6224 12.2969 18.5752C12.1553 18.528 11.9035 18.4414 11.5416 18.3155C11.1797 18.1739 10.9594 18.0874 10.8807 18.0559C9.99959 17.7412 9.21284 17.3714 8.5205 16.9466C7.38758 16.2385 6.19959 15.2629 4.95652 14.0199C3.72919 12.7925 2.76149 11.6124 2.05342 10.4795C1.61284 9.78716 1.2352 9.00041 0.920497 8.11926C0.904762 8.02485 0.826087 7.80455 0.684472 7.45839C0.558592 7.09648 0.464182 6.84472 0.401242 6.70311C0.354037 6.56149 0.291097 6.34907 0.212422 6.06584C0.133747 5.78261 0.0786749 5.52298 0.047205 5.28696C0.015735 5.05093 0 4.81491 0 4.57888C0 3.74493 0.228157 2.91097 0.684472 2.07702C1.18799 1.16439 1.66791 0.613665 2.12422 0.424845C2.34451 0.330435 2.65135 0.236025 3.04472 0.141615C3.4381 0.047205 3.75279 0 3.98882 0C4.1147 0 4.20911 0.0157356 4.27205 0.047205C4.4294 0.0944099 4.66542 0.432713 4.98012 1.06211C5.09027 1.2352 5.23188 1.47909 5.40497 1.79379C5.56232 2.10849 5.71967 2.39172 5.87702 2.64348C6.01863 2.91097 6.15238 3.15487 6.27826 3.37516C6.30973 3.40663 6.38841 3.51677 6.51429 3.70559C6.6559 3.89441 6.75818 4.05963 6.82112 4.20124C6.88406 4.32712 6.91553 4.453 6.91553 4.57888C6.91553 4.75197 6.78178 4.97226 6.51429 5.23975C6.26253 5.52298 5.98716 5.77474 5.6882 5.99503C5.38923 6.21532 5.106 6.45135 4.83851 6.70311C4.58675 6.95487 4.46087 7.15942 4.46087 7.31677C4.46087 7.41118 4.48447 7.51346 4.53168 7.6236C4.57888 7.74948 4.61822 7.84389 4.64969 7.90683C4.68116 7.96977 4.7441 8.07992 4.83851 8.23727C4.93292 8.37888 4.98012 8.46542 4.98012 8.49689C5.67246 9.72422 6.45921 10.7785 7.34037 11.6596C8.22153 12.5408 9.27578 13.3197 10.5031 13.9963C10.5188 14.012 10.6054 14.0671 10.7627 14.1615C10.9201 14.2559 11.0302 14.3188 11.0932 14.3503C11.1561 14.3818 11.2427 14.4211 11.3528 14.4683C11.4787 14.5155 11.581 14.5391 11.6596 14.5391C11.8327 14.5391 12.0451 14.4054 12.2969 14.1379C12.5487 13.8861 12.7847 13.6108 13.005 13.3118C13.2253 13.0128 13.4692 12.7296 13.7366 12.4621C14.0041 12.2104 14.2323 12.0845 14.4211 12.0845C14.547 12.0845 14.6729 12.1159 14.7988 12.1789C14.9246 12.2418 15.082 12.3362 15.2708 12.4621C15.4596 12.6037 15.5776 12.6824 15.6248 12.6981C15.8451 12.8398 16.0812 12.9814 16.3329 13.123C16.6004 13.2646 16.8915 13.4219 17.2062 13.595C17.5209 13.7681 17.7569 13.9019 17.9143 13.9963C18.5437 14.311 18.8899 14.5549 18.9528 14.728C18.9843 14.7909 19 14.8853 19 15.0112Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <a href="tel:+97611315611" className="hover:underline">
                      (+976) 11 315 611
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Email and Website - Full width below */}
            <ul className="space-y-2 text-sm text-[#c9d3cb] text-center lg:text-left mt-4">
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <span>
                  <svg
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6475 4.63021C18.7093 4.56944 18.7835 4.56033 18.8701 4.60287C18.9567 4.6454 19 4.7092 19 4.79427V12.25C19 12.7361 18.8268 13.1493 18.4805 13.4896C18.1341 13.8299 17.7135 14 17.2188 14H1.78125C1.28646 14 0.865885 13.8299 0.519531 13.4896C0.173177 13.1493 0 12.7361 0 12.25V4.79427C0 4.7092 0.0402018 4.6454 0.120605 4.60287C0.201009 4.56033 0.27832 4.56944 0.352539 4.63021C0.773112 4.94618 1.36068 5.3776 2.11523 5.92448C2.86979 6.47135 4.19336 7.41927 6.08594 8.76823C6.4694 9.04774 6.97038 9.40929 7.58887 9.85286C8.20736 10.2964 8.8444 10.5122 9.5 10.5C10.168 10.5122 10.8112 10.2934 11.4297 9.84375C12.0482 9.3941 12.5492 9.03559 12.9326 8.76823C14.8252 7.41927 16.1457 6.47135 16.894 5.92448C17.6424 5.3776 18.2269 4.94618 18.6475 4.63021ZM9.5 9.33333C9.06706 9.34549 8.58154 9.15104 8.04346 8.75C7.50537 8.34896 7.08171 8.03906 6.77246 7.82031C4.31087 6.07031 2.76465 4.96137 2.13379 4.49349C1.50293 4.02561 0.902995 3.57292 0.333984 3.13542C0.235026 3.05035 0.154622 2.94705 0.0927734 2.82552C0.0309245 2.70399 0 2.57639 0 2.44271V1.75C0 1.26389 0.173177 0.850695 0.519531 0.510417C0.865885 0.170139 1.28646 0 1.78125 0H17.2188C17.7135 0 18.1341 0.170139 18.4805 0.510417C18.8268 0.850695 19 1.26389 19 1.75V2.44271C19 2.57639 18.9691 2.70399 18.9072 2.82552C18.8454 2.94705 18.765 3.05035 18.666 3.13542C18.097 3.57292 17.4971 4.02561 16.8662 4.49349C16.2354 4.96137 14.6891 6.07031 12.2275 7.82031C11.9183 8.03906 11.4946 8.34896 10.9565 8.75C10.4185 9.15104 9.93294 9.34549 9.5 9.33333Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <a
                  href="mailto:international@cncf.org"
                  className="hover:underline"
                >
                  international@cncf.org
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2V22"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12H22"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2C14.5013 4.73855 16 8.2792 16 12C16 15.7208 14.5013 19.2615 12 22C9.49872 19.2615 8 15.7208 8 12C8 8.2792 9.49872 4.73855 12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <a
                  href="http://www.cncf.org"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cncf.org
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/17bbEjrEsy/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  unoptimized
                  src="/Facebook.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/christina-noble-children-s-foundation-international/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  unoptimized
                  src="/LinkedIn.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>

          {/* About us */}
          <div>
            <h3 className="font-bold text-white text-lg mb-3 text-center sm:text-left">
              About us
            </h3>
            <ul className="space-y-1 text-md text-[#c9d3cb] text-center sm:text-left">
              <li>
                •{" "}
                <a
                  href="https://www.cncf.org/christina-story/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Our Story
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://www.cncf.org/report/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-bold text-white text-lg mb-3 text-center sm:text-left">
              Get Involved
            </h3>
            <ul className="space-y-1 text-md text-[#c9d3cb] text-center sm:text-left">
              <li>
                •{" "}
                <a
                  href="https://www.cncf.org/sponsor-a-child/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Sponsor A Child
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://www.cncf.org/donate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Donate
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://www.cncf.org/corporate-partnerships/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Copyright */}
        <div className="text-center text-sm sm:text-md text-[#c9d3cb] leading-relaxed">
          © 2025 CNCF - A Thousand Wishes. All Rights Reserved.
          <br />
          Made with Love to bring joy to children across Vietnam and Mongolia.
        </div>
      </div>
    </footer>
  );
}
