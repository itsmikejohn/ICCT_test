<script>
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();
    let sName="";
    let sMiddleName="";
    let sLastName="";
    let sDateOfBirth="";
    let sEmail="";
    let sMobileNumber="";
    let gender="";

const formDataHandler = () => {
    let datas = [sName, sMiddleName, sLastName, sDateOfBirth,sEmail, gender]
    dispatch("data", datas)
}

</script>

<div class="main-div">
    <div class="student-info-form">
        <form on:submit|preventDefault={formDataHandler}>
            <div class="personal">
                <h2>PERSONAL INFORMATION</h2>
                    <div>
                        <label for="name">Name:</label>
                        <input class="mobile-view" required type="text" id="name" bind:value={sName} placeholder="First name"/>

                        <label for="m-name">Middle Name:</label>
                        <input class="mobile-view" required type="text" id="m-name" bind:value={sMiddleName} placeholder="Full middle name"/>

                        <label for="l-name">Last Name:</label>
                        <input class="mobile-view" required type="text" id="l-name" bind:value={sLastName} placeholder="Last name"/>

                        <label for="birth">Date of birth:</label>
                        <input class="mobile-view" required type="date" id="birth" bind:value={sDateOfBirth}/>
                    </div>

                    <div>
                        <label for="email">Email:</label>
                        <input class="mobile-view" required type="email" id="email" bind:value={sEmail} placeholder="Your main email address"/>

                        <label for="mob-number">Mobile Number:</label>
                        <input class="mobile-view" required type="number" id="mob-number" bind:value={sMobileNumber} placeholder="Your active mobile number"/>

                        <label for="gender">Gender:</label>
                        <select  required bind:value={gender}>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        
                    </div>
            </div>

            <div class="prev-school">
                <h2>SCHOOL INFORMATION</h2>
                    <div>
                        <label for="name">School Name:</label>
                        <input class="mobile-view" type="text" id="name" placeholder="Still on going"/>

                        <label for="m-name">Address:</label>
                        <input class="mobile-view" type="text" id="m-name"placeholder="Still on going"/>

                    </div>

                    <div>
                        <label for="email">School Email:</label>
                        <input class="mobile-view" type="email" id="email"placeholder="Still on going"/>

                        <label for="l-name">Date Graduated:</label>
                        <input class="mobile-view" type="date">
                    </div>
            </div>

            <button>Submit</button>
            
        </form>
    </div>
</div>

<style>
    #mob-number::-webkit-outer-spin-button,#mob-number::-webkit-inner-spin-button {
        display: none;
    }
    .main-div{
        display: grid;
        justify-content: center;
    }
    button {
        color: white;
        background-color: #4CAF50;
        border-radius: 0.3rem;
        margin-top: 0.5rem;
        margin-right: 10%;
        float: right;
        padding: 1rem;
        cursor: pointer;
    }

    
    select,option {
        margin: 1rem;
        padding: 0.5rem;
    }

    h2 {
        text-align: center;
        grid-column: 1/3;
    }

    .personal,.prev-school {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0;
        padding-left: 2rem;
        padding-bottom: 2rem;
        box-sizing: border-box;
        
    }
    .personal, .prev-school {
        background-color: #4CAF50;
        border-radius: 2rem;
        border: 1px solid gainsboro;
        margin-top: 1rem;
        padding: 0 5rem;
    }
    label {
        display: block;
        font-size: 1.2rem;
        margin-left: 1rem;
    }
    input {
        padding: 0.5rem;
        margin: 1rem;
    }
    @media screen and (max-width: 1285px) {
        .prev-school,.personal {
           margin: 0;
           padding: 0;
        }
    }

    @media screen and (max-width: 700px) {
        .prev-school,.personal {
           margin: 0;
           padding: 0;
        }
    }

    @media screen and (max-width: 480px) {
        .prev-school,.personal {
           display: block;
           margin-top: 1rem;
        }
        .mobile-view {
            width: 75vw;
        }
    }


</style>