import type { Meta, StoryObj } from '@storybook/vue3';

import PasswordInput from './PasswordInput.vue';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Primary: Story = {
  render: (args) => ({
    components: { PasswordInput },
    setup() {
      return { args };
    },
    template: '<PasswordInput v-bind="args">{{ args.default }}</PasswordInput>',
  }),
  args: {
    placeholder: '패스워드를 입력하세요',
    applyHideBtn: true,
  },
};
