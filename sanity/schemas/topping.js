import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // Computer Name
  name: 'topping',
  // Visible title
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'What is the name of the topping?',
      options: {
        layout: 'checkbox'
       },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    // prepare takes the fields property
    // the fields property is destructured to get name & veg keys
    prepare: ({name, vegetarian}) => ({
      title: `${name} ${vegetarian ? '🥬' : ''}`
    })
  }
};