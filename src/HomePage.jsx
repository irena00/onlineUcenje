import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="homepage-container">
            <header>
                <h1>Online Učenje</h1>
                <p>Dobrodošli na platformu za online učenje. Naučite nešto novo svakog dana!</p>
            </header>

            <section className="features">
                <div className="feature">
                    <h2>Kursevi</h2>
                    <p>Pridružite se našim interaktivnim kursevima i steknite nova znanja i veštine.</p>
                   
                </div>

                <div className="feature">
                    <h2>Tutorijali</h2>
                    <p>Pogledajte tutorijale na različite teme i usavršite svoje veštine.</p>
                    
                </div>

                <div className="feature">
                    <h2>Webinari</h2>
                    <p>Učestvujte uživo u našim web seminarima i postavljajte pitanja predavačima.</p>
                   
                </div>
            </section>

            <footer>
                <p>&copy; 2023 Online Učenje. </p>
            </footer>
        </div>
    );
}

export default HomePage;
