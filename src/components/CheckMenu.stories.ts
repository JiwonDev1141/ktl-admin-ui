import type { Meta, StoryObj } from '@storybook/vue3';

import CheckMenu from './CheckMenu.vue';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof CheckMenu> = {
  component: CheckMenu,
};

export default meta;
type Story = StoryObj<typeof CheckMenu>;

export const Primary: Story = {
  render: (args) => ({
    components: { CheckMenu },
    setup() {
      return { args };
    },
    template: '<CheckMenu v-bind="args">{{ args.default }}</CheckMenu>',
  }),
  args: {
    color: 'blue',
    name: '체크박스',
  },
};
