<template>
  <section class="navbar">
    <div class="navbar__content content">
      <div class="content__logo logo">
        <img
          class="logo__source"
          src="@/assets/images/fency-logo-w.svg"
          alt="Fency logo"
        />
      </div>
      <div class="content__navigation navigation">
        <div class="navigation__buttons buttons">
          <div
            class="buttons__button"
            v-for="link in links"
            :key="link.id"
            :style="link.active ? activeButton : passiveButton"
            @click="buttonClick"
          >
            <router-link class="button__link" :key="link.id" :to="link.route">
              <font-awesome-icon
                class="button__link--icon"
                :icon="link.icon"
              />{{ link.name }}</router-link
            >
          </div>
        </div>
      </div>
      <div class="content__credits credits">
        <span class="credits__text">
          <font-awesome-icon class="credits__text--icon" icon="copyright" />
          Robbe Van Aken
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      currentActiveButton: 0,

      activeButton: {
        borderLeft: "solid 10px $green",
      },

      passiveButton: {},

      links: [
        {
          id: 0,
          name: "Calculate",
          route: "/",
          icon: "ruler-combined",
          active: true,
        },

        {
          id: 1,
          name: "Profile",
          route: "/profile",
          icon: "user-circle",
          active: false,
        },
        {
          id: 2,
          name: "Stock",
          route: "/stock",
          icon: "warehouse",
          active: false,
        },
      ],
    };
  },

  methods: {
    buttonClick(e) {
      var targetId = e.target.body.id;
      console.log(targetId); // returns 'foo'
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/imports/variables.scss";

.navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;

  height: 100%;
  background-color: $dark;
  @include shadow();
  z-index: 2;

  &__content {
    .content {
      &__logo {
        padding: 50px;
        display: flex;
        .logo {
          &__source {
            width: 200px;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }

      &__navigation {
        .navigation {
          &__buttons {
            display: flex;
            flex-direction: column;
            .buttons {
              &__button {
                // margin-top: 1rem;

                .button {
                  &__link {
                    padding: 15px 30px 15px 50px;
                    text-align: left;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: $white;
                    @include plainText($white);
                    font-size: $menu-font-size;
                    text-decoration: none;
                    font-weight: 800;

                    &:hover {
                      background-color: $opac-dark;
                      cursor: pointer;
                      @include shadow();
                      border-left: solid 6px $green;
                    }

                    &--icon {
                      color: $white;
                      font-size: $menu-font-size;
                    }
                  }
                }
              }
            }
          }
        }
      }

      &__credits {
        position: fixed;
        bottom: 0;
        margin: 50px;
        .credits {
          &__text {
            @include plainText($white);
            font-size: $smallest-font-size;
            &--icon {
            }
          }
        }
      }
    }
  }
}

.router-link-exact-active {
  border-left: solid 6px $green;
  // @include shadow();
}
</style>
>
