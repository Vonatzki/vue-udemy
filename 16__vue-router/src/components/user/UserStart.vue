<template>
    <div>
        <p>Please select a User</p>
        <ul class="list-group">
            <router-link
                v-for="user_id in [1,2,3]"
                tag="li"
                :to="'/user/' + user_id"
                class="list-group-item"
                style="cursor: pointer">User {{ user_id }}</router-link>
        </ul>
    </div>
</template>
