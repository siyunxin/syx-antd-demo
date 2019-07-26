<script>
export default {
  name: 'RouterLayout',
  data () {
    return {
     
    }
  },
  render () {
  
    const inKeep = (
     
        <keep-alive>
          <router-view/>
        </keep-alive>
  
    )
    const notKeep = (
      <router-view />
    )
    return inKeep
  },
}
</script>
<style>

</style>
