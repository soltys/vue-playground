<template>
    <div class="menu frame">
        <h1 class="menu__menu-header">Menu</h1>
        <ul class="menu__menu-list">
            <li class="menu__menu-item">
                <router-link to="/" :exact="true" class="menu__menu-link">
                    Home
                </router-link>
            </li>
            <li class="menu__menu-item">
                <router-link to="/counter" class="menu__menu-link">
                    Counter
                </router-link>
            </li>
            <li class="menu__menu-item">
                <router-link to="/fetchdata" class="menu__menu-link">
                    Fetch data
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .menu {
        height: 100%;
    }

    .menu__menu-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .menu__menu-item {
       
        padding: 3px 0px 3px 0px;
    }

    .menu__menu-link {
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(249,249,249,1) 50%, rgba(242,242,242,1) 100%);
        border: 1px solid #C3C3C3;
        padding: 5px 10px 5px 10px;
        height: 100%;
        display: block;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menu__menu-link:active {
        background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(249,249,249,1) 50%, rgba(242,242,242,1) 100%);
 
    }
</style>
