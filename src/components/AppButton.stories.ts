import type { Meta, StoryObj } from '@storybook/vue3';

import AppButton from './AppButton.vue';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof AppButton> = {
  component: AppButton,
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
  render: (args) => ({
    components: { AppButton },
    setup() {
      return { args };
    },
    template: '<AppButton v-bind="args">{{ args.default }}</AppButton>',
  }),
  args: {
    outlined: true,
    text: 'Test Button',
  },
};
