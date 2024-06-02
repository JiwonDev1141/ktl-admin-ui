import type { Meta, StoryObj } from '@storybook/vue3';

import FormInput from './FormInput.vue';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof FormInput> = {
  component: FormInput,
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Primary: Story = {
  render: (args) => ({
    components: { FormInput },
    setup() {
      return { args };
    },
    template: '<FormInput v-bind="args">{{ args.default }}</FormInput>',
  }),
  args: {
    placeholder: '패스워드를 입력하세요',
  },
};
