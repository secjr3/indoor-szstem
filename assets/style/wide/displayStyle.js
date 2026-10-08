function otherAnimation(params) {

    const div = document.querySelector(".other-animation")

    div.innerHTML =`
    <svg class="ps3-waves" viewBox="0 0 1000 400" preserveAspectRatio="none">
                    <defs>
                        <!-- Gradiente para a Onda 1 (Mais brilhante) -->
                        <linearGradient id="onda1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#8ac28a" stop-opacity="0.3" />
                            <stop offset="50%" stop-color="#5CAC5C" stop-opacity="0.15" />
                            <stop offset="100%" stop-color="#8ac28a" stop-opacity="0" />
                        </linearGradient>
                        <!-- Gradiente para a Onda 2 (Mais profunda) -->
                        <linearGradient id="onda2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#5CAC5C" stop-opacity="0.25" />
                            <stop offset="50%" stop-color="#8ac28a" stop-opacity="0.1" />
                            <stop offset="100%" stop-color="#5CAC5C" stop-opacity="0" />
                        </linearGradient>
                    </defs>

                    <!-- Caminhos das curvas das listras -->
                    <path class="wave wave-back"
                        d="M0,200 C300,100 400,300 700,150 C900,50 950,250 1000,180 L1000,400 L0,400 Z"
                        fill="url(#onda1)" />
                    <path class="wave wave-front"
                        d="M0,250 C200,350 500,100 800,280 C900,350 950,150 1000,220 L1000,400 L0,400 Z"
                        fill="url(#onda2)" />
    </svg>`

}

export {otherAnimation}