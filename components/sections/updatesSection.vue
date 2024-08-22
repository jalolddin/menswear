<template>
  <div class="updates">
    <div class="updates__image">
      <img src="@/static/img/updatesSectionImg.png" alt="">
    </div>
    <div class="updates__content">
      <h1>Stay updates with our latest products and promotions</h1>
      <form>
        <input type="email" required placeholder="Email">
        <label>
          <input type="checkbox" name="consent" required>
          <span>
            I agree to the <a href="/privacy-policy" target="_blank" style="color: #8A0000">Privacy Policy</a> and consent to receiving marketing communications via email.
          </span>
        </label>
        <button type="submit" class="dark-button">
          SUBSCRIBE
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
