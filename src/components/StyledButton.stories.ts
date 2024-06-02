import type { Meta, StoryObj } from '@storybook/vue3';

import StyledButton from './StyledButton.vue';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof StyledButton> = {
  component: StyledButton,
};

export default meta;
type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
  render: (args) => ({
    components: { StyledButton },
    setup() {
      return { args };
    },
    template: '<StyledButton v-bind="args">{{ args.default }}</StyledButton>',
  }),
  args: {
    text: '로그인',
  },
};
