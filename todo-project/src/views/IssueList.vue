<template>
    <div>
        <h1>issueリスト</h1>
        <el-button type="success" @click="getIssues()">issue取得</el-button>
        <el-row :gutter="12">
            <!-- コード１ -->
            <el-col :span="12" v-for="issue in issues" :key="issue.id">
                <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
                    <el-row :gutter="12">
                        <!-- コード2 -->
                        <el-col :span="21">{{ issue.title }}</el-col>
                        <el-col :span="3">
                            <el-button type="success" icon="el-icon-check" circle></el-button>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import axios from 'axios';

const client = axios.create({
    // 環境変数に変更
    baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`,
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        // 環境変数に変更
        'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`
    },
})

export default {
    name: ' IssueList',
    data() {
        return {
            issues: []
        }
    },
    methods: {
        getIssues() {
            client.get('/issues')
                .then((res) => {
                    this.issues = res.data;
                })
        }
    }
}
</script>