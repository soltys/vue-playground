
<template>
    <div class="card__action-container">
        <button class="card__action card__action--dislike">
            <i class="fas fa-heart-broken"></i>
        </button>
        <button class="card__action card__action--like">
            <i class="fas fa-heart"></i>
        </button>
    </div>
</template>


<style scoped>
.card__action-container {
        display: flex;
        justify-content: space-evenly;
    }

    .card__action {
        background: radial-gradient(
            ellipse at center,
            rgba(203, 96, 179, 1) 0%,
            rgba(193, 70, 161, 1) 11%,
            rgba(168, 0, 119, 1) 58%,
            rgba(219, 54, 164, 1) 100%
        );
        border: 1px solid #c3c3c3;
        border-radius: 35px;
        padding: 20px;
        font-weight: bold;
        color: #fff;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .card__action--like {
        background: radial-gradient(
            ellipse at center,
            rgba(203, 96, 179, 1) 0%,
            rgba(193, 70, 161, 1) 11%,
            rgba(168, 0, 119, 1) 58%,
            rgba(219, 54, 164, 1) 100%
        );
        color: #fff;
    }
    .card__action--like:active {
        background: radial-gradient(
            ellipse at center,
            rgba(193, 70, 161, 1) 0%,
            rgba(168, 0, 119, 1) 82%,
            rgba(219, 54, 164, 1) 100%
        );
        color:#ddd;
    }

    .card__action--dislike {
        background: radial-gradient(
            ellipse at center,
            rgba(76, 76, 76, 1) 0%,
            rgba(89, 89, 89, 1) 17%,
            rgba(71, 71, 71, 1) 40%,
            rgba(19, 19, 19, 1) 100%
        );
        color: #fff;
    }

    .card__action--dislike:active{
        color:#ddd;
    }
</style>
