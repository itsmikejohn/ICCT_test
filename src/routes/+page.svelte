<script>
    import AboutUs from "./AboutUs.svelte";
import Description from "./Description.svelte";
	import Enrollment from "./Enrollment.svelte";
	import Footer from "./Footer.svelte";
    import Home from "./Home.svelte";
	import HomeContent from "./HomeContent.svelte";
	import Navigation from "./Navigation.svelte";
    let activeItem = "Home";
    let showModal = false;
    let newArray=["", "", "", "", "",""];

    const tabChanger = (/** @type {{ detail: String; }} */ e) => {
        let newActiveItem = e.detail;
        activeItem = newActiveItem;
    }
const dataHandler = (/** @type {{ detail: String; }} */ e) => {
    newArray = [... e.detail];
    showModal = true;
}

</script>

<main>
    <div class="container">
        <div class="header">
            {#if showModal}
            <div class="modal">
                <div class="modalMsg">
                    <div class="close" on:click={()=>showModal=false}>Close</div>
                    <p>We have sent an email to your email {newArray[4]}</p>
                </div>
            </div>
            {/if}
            <Home {activeItem} on:tabChanger={tabChanger}/>
        </div>

        <div class="navigation">
            <Navigation />
        </div>

        <div class="main-content">
            {#if activeItem === "Home"}
            <HomeContent />
            {:else if activeItem ==="Enrollment"}
            <Enrollment on:data={dataHandler} />
            {:else if activeItem ==="About Us"}
            <AboutUs />
            {/if}

            
        </div>

        <div class="description">
            <Description />
        </div>

        <div class="footer">
            <Footer />
        </div>
    </div>
</main>




<style>
    .close {
        text-align: center;
        font-size: 1rem;
        border-radius: 10rem;
        border: 1px solid black;
        color: red;
        float: right;
        background-color: blue;
        cursor: pointer;
    }
    .modal {
        background-color: rgba(0,0,0,0.9);
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .modalMsg {
        border-radius: 2rem;
        max-width: 400px;
        height: 200px;
        background-color: white;
        margin: 8rem auto;
    }
    p{
        font-size: 2rem;
        padding-top: 3.5rem;
    }
    .container {
        background-color: aliceblue;
        display: grid;
        align-items: center;
        grid-template-columns: 25% 50% 25%;
    }
    .header {
        text-align: center;
        grid-column: 1/4;
        border-bottom: 1px solid gainsboro;
    }

    .navigation {
        border-right: 1px solid black;
        height: 100%;
    }

    .main-content {
        border-right: 1px solid black;
        height: 100%;
    }

    .description {
        height: 100%;
    }

    .footer {
        
        text-align: center;
        grid-column: 1/4;
        border-top: 1px solid gainsboro;
    }

    @media screen and (max-width: 920px) {
        .container {
            display: block;
        }
        .navigation,.description,.main-content {
            border: 1px solid black;
        }

        .main-content {
            justify-content: center;
            
        }
    }

    @media screen and (max-width: 480px) {
        .modal {
            height: 200%;
        }
    }
</style>
