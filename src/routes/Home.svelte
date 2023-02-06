<script>
    import { createEventDispatcher } from "svelte"
    let dispatch = createEventDispatcher();
    
    let homeTabs = ["Home","Enrollment", "About Us"]
    export let activeItem = ""
    const onKey = () => {
    }
    
</script>

<div>
    <ul>
        {#each homeTabs as value}
        <li class:active={value == activeItem}
        on:keypress={onKey}
        on:click={()=> dispatch("tabChanger", value)}
        >{value}</li>
        {/each}
    </ul>
</div>

<style>

ul {
    padding: 1rem;
}
    
li {
    display: flex;
    font-size: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: inline;
    list-style: none;
    cursor: pointer;
}

.active {
    color: red;
    transition: 0.5s;
    text-decoration: underline;
}

@media screen and (max-width: 1069px) {
    li {
        font-size: 3rem;
    }
}
@media screen and (max-width: 848px) {
    li {
        font-size: 2rem;
    }
}

@media screen and (max-width: 627px) {
    li {
        font-size: 1.5rem;
    }
}
@media screen and (max-width: 516px) {
    li {
        font-size: 1.4rem;
    }
}
@media screen and (max-width: 496px) {
    li {
        font-size: 1.2rem;
    }
}
@media screen and (max-width: 450px) {
    li {
        font-size: 1rem;
    }
}
</style>