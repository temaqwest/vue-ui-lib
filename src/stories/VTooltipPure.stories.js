import VTooltipPure from "./../components/VTooltipPure.vue";
import VButton from "./../components/VButton.vue";

export default {
  title: 'Components/VTooltipPure',
  component: VTooltipPure,
  parameters: {
    backgrounds: {
      default: 'Dark',
      values: [
        { name: 'Dark', value: '#2f2f2f' },
        { name: 'Light', value: '#d9d9d9' },
      ],
    },
  },
  argTypes: {
    dir: {
      default: 'bottom',
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  }
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VTooltipPure, VButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div style="margin: 50px auto;">
      <v-tooltip-pure v-bind="args">
        <template v-slot="{attrs}">
          <v-button v-bind="attrs">
            Pure css
          </v-button>
        </template>
      </v-tooltip-pure>
    </div>
  `,
});

export const onButton = Template.bind({});
onButton.args = {
  text: 'Hello world ༼ つ ◕_◕ ༽つ'
};
