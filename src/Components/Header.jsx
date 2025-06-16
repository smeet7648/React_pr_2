import "../App.css";

function Header() {
    return (
        <header class="header">
            <div class="st1">
                <div class="f1">
                    <p class="p1">SHOPPING CENTER <span class="change">for all orders over $100</span></p>
                </div>
                <div class="f2">
                    <a href="0"><p class="p2">Store Location | </p></a>
                    <a href="0"><p class="p3">Track Your Order |</p></a>
                    <select name="" id="" class="select1">
                        <option value="Usd">USD</option>
                        <option value="Euro">EURO</option>
                        <option value="Gbp">GBP</option>
                    </select>
                    <select name="" id="" class="select1">
                        <option value="English">English</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                    </select>
                </div>
            </div>
        </header>
    );
}

export default Header;