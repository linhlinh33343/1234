<template>
   <div v-if="auth.isAuthenticated" class="progress-bar">
        Progress:{{progress}}%
   </div>
</template>

<script>
import { mapGetters ,mapState} from 'vuex'
export default {
    name:'ProgressBar',
    computed:{
        ...mapGetters(['progress']),
        ...mapState(["auth"])
    }
}
</script>


<style>
    .progress-bar {
        padding: 5px;
        text-align: center;
        background: rgb(106, 248, 118);
        color: black;
    }

</style>