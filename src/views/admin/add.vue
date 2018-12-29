<template>
    <div>
        add
    </div>
</template>
<script>
import api from "@/utils/api";
export default {
    data(){
        return{

        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.$http.get(api.admin).then((res)=>{
                if(res&res.code==0){
                    console.log(data);
                }
            })
        }
    }
}
</script>

