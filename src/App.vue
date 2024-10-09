<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-blue-500 p-4 text-white">
            <ul class="flex space-x-4">
                <li>
                    <router-link to="/" class="hover:underline"
                        >All Tasks</router-link
                    >
                </li>
                <li>
                    <router-link to="/completed" class="hover:underline"
                        >Completed Tasks</router-link
                    >
                </li>
                <li>
                    <router-link to="/pending" class="hover:underline"
                        >Pending Tasks</router-link
                    >
                </li>
            </ul>
        </nav>

        <main class="p-6">
            <router-view></router-view>
        </main>
    </div>
</template>
