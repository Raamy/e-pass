<template>
  <div>
    <div class="container">
      <div>
        <div data-aos="fade" data-aos-duration="1100">
          <!-- Mint Price -->
          <div>
            <div v-b-toggle.collapse-1 style="display: flex">
              <div class="ml-auto">
                <span>What is the mint price ?</span>
              </div>
              <div class="ms-auto mt-4">
                <b-icon class="mb-auto" scale="2" icon="arrow-bar-down"></b-icon>
              </div>
            </div>
            <b-collapse id="collapse-1">
              <div class="style-text">
                The price will be announced on Discord and Twitter very soon
              </div>
            </b-collapse>
          </div>
          <hr>
          <!-- Mint Date -->
          <div>
            <div v-b-toggle.collapse-2 style="display: flex">
              <div class="ml-auto">
                <span>When is the mint ?</span>
              </div>
              <div class="ms-auto mt-4">
                <b-icon class="mb-auto" scale="2" icon="arrow-bar-down"></b-icon>
              </div>
            </div>
            <b-collapse id="collapse-2">
              <div class="style-text">
                Summer 2022
              </div>
            </b-collapse>
          </div>
          <hr>
          <!-- NFT for sale -->
          <div>
            <div v-b-toggle.collapse-3 style="display: flex">
              <div class="ml-auto">
                <span>How Many NFT are withheald for sale ?</span>
              </div>
              <div class="ms-auto mt-4">
                <b-icon class="mb-auto" scale="2" icon="arrow-bar-down"></b-icon>
              </div>
            </div>
            <b-collapse id="collapse-3">
              <div class="style-text">
                250 and 300 NFTs will not be for sale, and locked in a wallet, for
                donations, marketing, family, friends and team.
              </div>
            </b-collapse>
          </div>
          <hr>
          <!-- Whitelist spot -->
          <div>
            <div v-b-toggle.collapse-4 style="display: flex">
              <div class="ml-auto">
                <span>How to get the whitelist spot ?</span>
              </div>
              <div class="ms-auto mt-4">
                <b-icon class="mb-auto" scale="2" icon="arrow-bar-down"></b-icon>
              </div>
            </div>
            <b-collapse id="collapse-4" class="style-text">
             <div class="style-text">
               The whitelist are currently offered by : <br>
               - Giveaways (Twitter / Discord).<br>
               - Raffles or contest.<br>
               - Engagement and interest for the project.
             </div>
            </b-collapse>
          </div>
          <hr>
          <!-- Secondary royalties -->
          <div>
            <div v-b-toggle.collapse-5 style="display: flex">
              <div class="ml-auto">
                <span>What are secondary royalties ?</span>
              </div>
              <div class="ms-auto mt-4">
                <b-icon scale="2" icon="arrow-bar-down"></b-icon>
              </div>
            </div>
            <b-collapse id="collapse-5">
              <div class="style-text">
                The royalties are 7.5% and entirely used for the project and its
                community.
              </div>
            </b-collapse>
          </div>
          <hr>
          <!-- Funds used -->
          <div>
            <div v-b-toggle.collapse-6 style="display: flex">
              <div class="ml-auto">
                <span>How will the funds be used?</span>
              </div>
              <div class="ms-auto mt-4">
                <b-icon class="mb-auto" scale="2" icon="arrow-bar-down"></b-icon>
              </div>
            </div>
            <b-collapse id="collapse-6">
              <div class="style-text">
                The funds will be used for the team's remuneration, recruitment,
                roadmap and communication
              </div>
            </b-collapse>
          </div>
          <hr>
          <!-- Short time rewards -->
          <div>
            <div v-b-toggle.collapse-7 style="display: flex">
              <div class="ml-auto">
                <span>What rewards can i get in the short time ?</span>
              </div>
              <div class="ms-auto mt-4">
                <b-icon class="mb-auto" scale="2" icon="arrow-bar-down"></b-icon>
              </div>
            </div>
            <b-collapse id="collapse-7">
              <div class="style-text">
                By keeping your NFTs, you will be able to get the print and a ready
                to wear piece. By keeping it longer you will have access to the rest
                of the roadmap.
              </div>
            </b-collapse>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrequentlyAsked"
}
</script>

<style scoped>
span {
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: left;
  font-size: 36px;
}

.style-text {
  font-size: 24px;
  text-align: justify;
  text-justify: distribute;
  text-align-last: left;
  margin-top: 3vh;
}

.container {
  max-width: 50vw;
}

@media (max-width: 1100px) {
  span {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: left;
    font-size: 24px;
  }

  .container {
    max-width: 90vw;
  }

  .style-text {
    font-size: 18px;
  }
}
</style>