import type { Meta, StoryObj } from '@storybook/vue3';

import StyledButton from './StyledButton.vue';

import sourceCode from './StyledButton.vue?raw';

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
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <textarea disabled='true' class='w-full h-full px-10 py-4 bg-gray-800 text-green-400 rounded-md'>{{sourceCode}}</textarea>
    </div>
    <StyledButton v-bind="args">{{ args.default }}</StyledButton>
    `,
  }),
  args: {
    text: '로그인',
  },
};
