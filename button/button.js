document.addEventListener('DOMContentLoaded', () => {
            const confettiButton = document.getElementById('confettiBtn1');

            confettiButton.addEventListener('click', () => {
                // Do the actual work (e.g. submit form, save data) here first
                // ...
                
                // Then, trigger the celebration!
                const celebration = () => {
                    const duration = 1000;
                    const animationEnd = Date.now() + duration;
                    const defaults = { startVelocity: 30, spread: 260, ticks: 60, zIndex: 0 };

                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                    }

                    const interval = setInterval(function() {
                        const timeLeft = animationEnd - Date.now();

                        if (timeLeft <= 0) {
                            return clearInterval(interval);
                        }

                        const particleCount = 50 * (timeLeft / duration);
                        // since particles fall down, start a bit higher than random
                        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
                    }, 250);
                };

                celebration();
            });
        });


const snowContainer = document.getElementById("snow");

    for (let i = 0; i < 20; i++) {
      const snowflake = document.createElement("div");

      snowflake.classList.add("snowflake");

      const size = (Math.random() * 0.8 + 0.2) + "vw";
      const leftStart = Math.random() * 100 + "vw";
      const leftIni = (Math.random() * 20 - 10) + "vw";
      const leftEnd = (Math.random() * 20 - 10) + "vw";
      const duration = (5 + Math.random() * 10) + "s";
      const delay = -(Math.random() * 10) + "s";

      snowflake.style.setProperty("--size", size);
      snowflake.style.setProperty("--left-start", leftStart);
      snowflake.style.setProperty("--left-ini", leftIni);
      snowflake.style.setProperty("--left-end", leftEnd);
      snowflake.style.setProperty("--duration", duration);
      snowflake.style.setProperty("--delay", delay);

	const opacity = Math.random() * 0.6 + 0.1;
	snowflake.style.opacity = opacity;

	

      snowContainer.appendChild(snowflake);
    }


        
