import { HeaderLight } from '../components/Header';

function Business() {
    return(
        <div className="corporat-page-wrapper">
            <HeaderLight />

            <main className="content" role="main">
                <section className="header bg-primary">
                    <div className="container">
                        <h1>Business</h1>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Business;