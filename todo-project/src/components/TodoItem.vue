<template>
    <div>
        <el-col :span="12">
            <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
                <el-row :gutter="12">
                    <el-col :span="21">
                        <p v-if="todo.type === 'task'">{{ todo.taskName }}</p>
                        <p v-else-if="todo.type === 'issue'">{{ todo.issueName }}</p>
                    </el-col>
                    <el-col :span="3">
                        <el-button @click="handleDone" type="success" icon="el-icon-check" circle></el-button>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        handleDone() {
            if (this.todo.type === 'task') {
                this.$emit('remove-todo', this.index);
            } else if (this.todo.type === 'issue') {
                this.$emit('close-issue', this.index);
            }
        }
    }
};
</script>

<style scoped>
/* Estilos adicionales según sea necesario */
</style>
