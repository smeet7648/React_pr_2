import "../App.css";

function Main() {
  const left = () => {
    document.getElementById("ptx1").style.display = "block";
    document.getElementById("ptx3").style.display = "none";
  }
  const right = () => {
    document.getElementById("ptx1").style.display = "none";
    document.getElementById("ptx3").style.display = "block";
  }

  return (
    <main>
      <div class="nav">
        <div class="logo">
          <h1 class="title">Mart<span class="change1">Fury</span></h1>
          <div class="logo1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNEBO2OUKQjP-RSbIZae3jIq76g3rMrn9vQ&s" alt="" class="img1" />
            <div class="open">
              <div class="opul1">
                <a href="0" class="apa1">
                  <img src="https://png.pngtree.com/png-vector/20190725/ourmid/pngtree-vector-star-icon-png-image_1577370.jpg" alt="" class="opmg1" id="fix1" />
                  <p class="opli1">Hot Promotion</p>
                </a>
                <a href="0">
                  <img src="https://cdn-icons-png.flaticon.com/512/75/75258.png" alt="" class="opmg1" />
                  <p class="opli1">Consumer Electronic</p>
                </a>
                <a href="0">
                  <img src="https://cdn-icons-png.flaticon.com/512/4305/4305423.png" alt="" class="opmg1" />
                  <p class="opli1">Clothing & Apparel</p>
                </a>
                <a href="0">
                  <img src="https://cdn-icons-png.flaticon.com/512/66/66050.png" alt="" class="opmg1" />
                  <p class="opli1">Home, Garden & Kitchen</p>
                </a>
                <a href="0">
                  <img src="data:image/png;base64,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" alt="" class="opmg1" />
                  <p class="opli1">Health & Beauty</p>
                </a>
                <a href="0">
                  <img src="https://cdn-icons-png.flaticon.com/512/636/636600.png" alt="" class="opmg1" />
                  <p class="opli1">Yelwerly & Watches</p>
                </a>
                <a href="0">
                  <img src="https://www.iconpacks.net/icons/1/free-computer-icon-956-thumb.png" alt="" class="opmg1" />
                  <p class="opli1">Computer & Technology</p>
                </a>
                <a href="0">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2f-EK67JQEoRBg6rBbuwaQVGpAJrUAQmP8g&s" alt="" class="opmg1" />
                  <p class="opli1">Babies & Moms</p>
                </a>
                <a href="0">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWG6CZqZvOOmDtP5TEN2coGEMeImaoOwPLA&s" alt="" class="opmg1" />
                  <p class="opli1">Sports & Outdoors</p>
                </a>
                <a href="0">
                  <img src="https://cdn-icons-png.flaticon.com/512/0/191.png" alt="" class="opmg1" />
                  <p class="opli1">Phones & Accessories</p>
                </a>
                <a href="0">
                  <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="" class="opmg1" />
                  <p class="opli1">Books & Office</p>
                </a>
                <a href="0">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_XuZJTgcNKv5L9sNijob1v5A03-5IwmjjCA&s" alt="" class="opmg1" />
                  <p class="opli1">Cars & Motocycles</p>
                </a>
                <a href="0">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuF4Z-FtvEn0KFN11kmFjDzx1dvpy0uu0hOQ&s" alt="" class="opmg1" />
                  <p class="opli1">Home Improments</p>
                </a>
                <a href="0">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GLLy87AtDzMdy2zognPHmrrhSEiaqtoOEA&s" alt="" class="opmg1" />
                  <p class="opli1">Vouchers & Services</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="inp1">
          <select name="" id="" class="select2">
            <option value="All">All</option>
            <option value="Clothes">Clothes</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Beauty">Beauty</option>
            <option value="Sports">Sports</option>
            <option value="Toys">Toys</option>
            <option value="Home">Home</option>
            <option value="Garden">Garden</option>
            <option value="Automotive">Automotive</option>
            <option value="Health">Health</option>
            <option value="Grocery">Grocery</option>
            <option value="Pet">Pet</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Music">Music</option>
            <option value="Video Games">Video Games</option>
            <option value="Office Supplies">Office Supplies</option>
            <option value="Baby">Baby</option>
            <option value="Arts">Arts</option>
            <option value="Crafts">Crafts</option>
            <option value="Tools">Tools</option>
            <option value="Furniture">Furniture</option>
            <option value="Appliances">Appliances</option>
          </select>
          <input type="text" class="search" name="" id="" placeholder="Search Products ..." />
          <button class="btn1">Search</button>
        </div>
        <div class="acc1">
          <img class="icon1" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="" />
          <img class="icon2" src="https://img.freepik.com/premium-vector/vector-design-cart-bag-icon-style_822882-170391.jpg" alt="" />
          <img class="icon3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8e1XkIN5Pa8yiLlgHusqgqpfL2WCXLO6XA&s" alt="" />
          <a href="0"><p class="p4">Login</p></a>
          <a href="0"><p class="p5">Register</p></a>
        </div>
      </div>
      <div class="nav2">
        <a href="0">
          <p class="p6">HOT DEALS</p>
        </a>
        <a href="0">
          <p class="p7">SMARTPHONES</p>
        </a>
        <a href="0">
          <p class="p8">TABLETS</p>
        </a>
        <a href="0">
          <p class="p9">LAPTOPS</p>
        </a>
        <a href="0">
          <p class="p10">SOUND</p>
        </a>
        <a href="0">
          <p class="p11">TECHNOLOGY TOYS</p>
        </a>
        <a href="0">
          <p class="p12">ACCESORIES</p>
        </a>
      </div>
      <div class="bg">
        <div class="info">
          <p class="p13">Weekend Promotions</p>
          <h3 class="head2">
            Mini Iphone <br /> Mini Radio <br /> Sale{" "}
            <span class="change3">30% Off</span>
          </h3>
          <button class="btn2">Shop now</button>
        </div>
      </div>
      <div class="bxt1">
        <div class="bx1">
          <img
            src="https://img.icons8.com/ios7/512w/228BE6/rocket.png"
            alt=""
            class="img2"
          />
          <p class="p14">
            Free Delivery <br />{" "}
            <span class="set1">for all orders over $99</span>{" "}
          </p>
        </div>
        <div class="bx2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzg5s0IyyWsPBHGRZJLHKldy7W6bvIRGz6g&s"
            alt=""
            class="img3"
          />
          <p class="p14">
            {" "}
            90 days Return <br />{" "}
            <span class="set1">if goods have problems</span>{" "}
          </p>
        </div>
        <div class="bx3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5629/5629277.png"
            alt=""
            class="img4"
          />
          <p class="p14">
            Secure Payment <br /> <span class="set1">100% protected </span>{" "}
          </p>
        </div>
        <div class="bx4">
          <img
            src="https://img.icons8.com/fluent-systems-regular/512w/228BE6/chat--v2.png"
            alt=""
            class="img5"
          />
          <p class="p14">
            24/7 Support <br /> <span class="set1">Dedicated support</span>{" "}
          </p>
        </div>
      </div>

      <section class="s1">
        <div class="fs1">
          <p class="p15">Deal of the day</p>
          <a href="0">
            <p class="p16">View all ▶️</p>
          </a>
        </div>
        <div class="fs2">
          <div class="left1">
            <img src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="" class="leog1" id="lg1" onClick={left} />
          </div>
          <div class="tox1" id="ptx1">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F4a_bb7b245770.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17" id="flix1">YOUNG SHOP</p>
            <p class="p18">$60.99</p>
            <p class="p19">Xbox One Wireless Controller Black Color</p>
            <p class="p20">⭐⭐⭐⭐☆</p>
            <div class="dob1">
              <span class="sob1"></span>
            </div>
            <p class="p21">Sold : 241</p>
          </div>
          <div class="tox2">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F6a_64d1694c41.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$21.79</p>
            <p class="p19">Sound Intone 165 Earphone White Version</p>
            <p class="p20">⭐⭐⭐⭐☆</p>
            <div class="dob1">
              <span class="sob1"></span>
            </div>
            <p class="p21">Sold : 101</p>
          </div>
          <div class="tox3">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F14a_a6a59e67a9.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$70.65</p>
            <p class="p19">ASUS Chromebook Flip — 10.2 Inch 2012</p>
            <p class="p20">⭐⭐⭐⭐☆</p>
            <div class="dob1">
              <span class="sob1"></span>
            </div>
            <p class="p21">Sold : 152</p>
          </div>
          <div class="tox4">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F15a_6962d26dfe.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$84.69</p>
            <p class="p19">Apple MacBook Air Retina 12-lnch Laptop</p>
            <p class="p20">⭐⭐⭐⭐☆</p>
            <div class="dob1">
              <span class="sob1"></span>
            </div>
            <p class="p21">Sold : 233</p>
          </div>
          <div class="tox5">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F14c_2c3eaebb65.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$86.99</p>
            <p class="p19">Samsung Gallaxy A8 IOGB Ram — Sliver Version</p>
            <p class="p20">⭐⭐⭐⭐☆</p>
            <div class="dob1">
              <span class="sob1"></span>
            </div>
            <p class="p21">Sold : 220</p>
          </div>
          <div class="tox5" id="ptx3">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F18a_b09e066132.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17" id="flix1">YOUNG SHOP</p>
            <p class="p18">$48.99</p>
            <p class="p19">Samsung UHD TV 24inch with silver and black </p>
            <p class="p20">⭐⭐⭐⭐☆</p>
            <div class="dob1">
              <span class="sob1"></span>
            </div>
            <p class="p21">Sold : 220</p>
          </div>
          <div class="right1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsd1xGuWttJzi78uQ8VGIVydM2Sp1IrfWQQ&s" alt="" class="leog2" id="rg1" onClick={right} />
          </div>
        </div>
        <div className="add1">
          <img
            src="https://martfury.nouhtml5.com/static/img/promotions/home-10/1.jpg"
            class="ad1"
          />
          <img
            src="https://martfury.nouhtml5.com/static/img/promotions/home-10/2.jpg"
            class="ad2"
          />
        </div>
        <h1 class="tp1">Top Categories of the Month </h1>
        <div class="pics">
          <div class="pic1">
            <img
              src="https://martfury.nouhtml5.com/static/img/categories/technology/1.jpg"
              class="ci1"
            />
            <h1 class="re1">SmartPhone</h1>
          </div>

          <div class="pic1">
            <img
              src="https://martfury.nouhtml5.com/static/img/categories/technology/2.jpg"
              class="ci1"
            />
            <h1 class="re1">Tables</h1>
          </div>

          <div class="pic1">
            <img
              src="https://martfury.nouhtml5.com/static/img/categories/technology/3.jpg"
              class="ci1"
            />
            <h1 class="re1">Laptops</h1>
          </div>

          <div class="pic1">
            <img
              src="https://martfury.nouhtml5.com/static/img/categories/technology/4.jpg"
              class="ci1"
            />
            <h1 class="re1">Sounds</h1>
          </div>

          <div class="pic1">
            <img
              src="https://martfury.nouhtml5.com/static/img/categories/technology/5.jpg"
              class="ci1"
            />
            <h1 class="re1">Technology Toys</h1>
          </div>

          <div class="pic1">
            <img
              src="https://martfury.nouhtml5.com/static/img/categories/technology/6.jpg"
              class="ci1"
            />
            <h1 class="re1">Accessiores</h1>
          </div>
        </div>
      </section>

      <section>
        <div class="add2">
          <p class="p22">Popular Smartphones & Tablets</p>
          <div class="add3">
            <a href="0">
              <p class="p23">Iphone, Ipad, Samsung</p>
            </a>
            <a href="0">
              <p class="p24">View all</p>
            </a>
          </div>
        </div>
        <div class="fs3">
          <div class="tox11">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F1c_e3e7bf6c87.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$90.45</p>
            <p class="p19">Apple iPhone 7 Plus 128 GB — Red Color</p>
            <p class="p20">⭐⭐⭐⭐☆ 04</p>
          </div>
          <div class="tox12">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F1a_e06f965f4b.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$32.96</p>
            <p class="p19">Apple iPhone Retina 6s Plus 64GB</p>
            <p class="p20">⭐⭐☆☆☆ 02</p>
          </div>
          <div class="tox13">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F1b_3875b21be9.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$37.18</p>
            <p class="p19">Apple iPhone X 256GB T- Mobile — Black</p>
            <p class="p20">⭐⭐⭐☆☆ 03</p>
          </div>
          <div class="tox14">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F14c_2c3eaebb65.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$86.17</p>
            <p class="p19">Samsung Gallaxy A8 IOG Ram — Sliver Version</p>
            <p class="p20">⭐⭐⭐☆☆ 03</p>
          </div>
          <div class="tox15">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F14d_f8958eb9bd.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$53.68</p>
            <p class="p19">Samsung Gallaxy A8 8GB Ram — Sliver Version</p>
            <p class="p20">⭐⭐⭐☆☆ 03</p>
          </div>
        </div>
      </section>

      <section>
        <div class="ade2">
          <p class="ps22">Technology Toys Recommended For You</p>
          <div class="ade3">
            <a href="0"><p class="ps23">Micro</p></a>
            <a href="0"><p class="ps23">Drone</p></a>
            <a href="0"><p class="ps23">JQOS</p></a>
            <a href="0">
              <p class="ps24">View all</p>
            </a>
          </div>
        </div>
        <div class="fsi3">
          <div class="toxi11">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F16a_ace7201098.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$56.99</p>
            <p class="p19">Samsung Gear VR Virtual Reality Headset</p>
            <p class="p20">⭐⭐⭐⭐☆ 02</p>
          </div>
          <div class="toxi12">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F23a_2ee0e95dc9.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$89.99</p>
            <p class="p19">GoPro Karman 4 Channels Quadcopter</p>
            <p class="p20">⭐⭐☆☆☆ 02</p>
          </div>
          <div class="toxi13">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F18a_b09e066132.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$96.99</p>
            <p class="p19">Apple Tv 4k - 32Gb(4th Gen)</p>
            <p class="p20">⭐⭐⭐☆☆ 03</p>
          </div>
          <div class="toxi14">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F23d_b38f35906b.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$75.99</p>
            <p class="p19">IQOS 2.4 Plus Kit, Holder & Charges-</p>
            <p class="p20">⭐⭐⭐☆☆ 02</p>
          </div>
          <div class="toxi15">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F23a_2ee0e95dc9.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$33.99</p>
            <p class="p19">DJI Phantom 4 Quadcopter Camera </p>
            <p class="p20">⭐⭐⭐☆☆ 03</p>
          </div>
        </div>
        <div class="adei2">
          <p class="ps22">Best Seller Laptops & Sounds</p>
          <div class="ade3">
            <a href="0"><p class="psr23">Apple</p></a>
            <a href="0"><p class="psr23">Laptop</p></a>
            <a href="0"><p class="psr23">Asus</p></a>
            <a href="0"><p class="psr23">JBL</p></a>
            <a href="0"><p class="psr23">Speaker</p></a>
            <a href="0"><p class="psr23">Mashal</p></a>
            <a href="0">
              <p class="ps24">View all</p>
            </a>
          </div>
        </div>
        <div class="fsic3">
          <div class="toxiz11">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F4a_bb7b245770.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$59.99</p>
            <p class="p19">XBOX One Wireless Controller Black</p>
            <p class="p20">⭐⭐⭐⭐☆ 02</p>
          </div>
          <div class="toxiz12">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F6a_64d1694c41.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$29.99</p>
            <p class="p19">Sound Inton I65 Headphone White Version</p>
            <p class="p20">⭐⭐☆☆☆ 02</p>
          </div>
          <div class="toxiz13">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F14a_a6a59e67a9.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$70.99</p>
            <p class="p19">Asus ChromeBook Flip - 10.3 inch</p>
            <p class="p20">⭐⭐⭐☆☆ 03</p>
          </div>
          <div class="toxiz14">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F15a_6962d26dfe.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$25.99</p>
            <p class="p19">Apple MacBook Air Retina 13.3 inch Laptop </p>
            <p class="p20">⭐⭐⭐☆☆ 02</p>
          </div>
          <div class="toxiz15">
            <img
              src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F18b_cff3b7eb31.jpeg&w=1920&q=75"
              alt=""
              class="img6"
            />
            <p class="p17">YOUNG SHOP</p>
            <p class="p18">$93.99</p>
            <p class="p19">Samsung 65 inch 4K Ultra HD Smart LEd Tv </p>
            <p class="p20">⭐⭐⭐☆☆ 03</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
