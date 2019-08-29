<template>
  <div class="subpage">
    
    <div class="row">
      <div class="col">
        <h1>Dashboard</h1>
        <DashboardCard></DashboardCard>
        <DashboardCard></DashboardCard>
        <DashboardCard></DashboardCard>
      </div>
      <div class="col dashboard-logo">
        <img src="../assets/img/logo-alt.svg" alt="logo alt">
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCard from './DashboardCard.vue'

export default {
  components: {
    DashboardCard
  }
}
</script>