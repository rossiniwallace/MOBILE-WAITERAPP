import {useState} from 'react';
import {FlatList} from 'react-native';
import {Category} from '../../types/Category';
import {Text} from '../Text';
import {CategoryContainer, Icon} from './styles';

interface CategoriesProps {
  categories: Category[];
  onSelectedCategory: (categoryId: string) => Promise<void>;
}

export function Categories({
  categories,
  onSelectedCategory,
}: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;
    onSelectedCategory(category);
    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{paddingRight: 24}}
      keyExtractor={(category) => category.id}
      renderItem={({item: category}) => {
        const isSelected = selectedCategory === category.id;
        return (
          <CategoryContainer key={category.id} onPress={() => handleSelectCategory(category.id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>

            <Text opacity={isSelected ? 1 : 0.5} size={14} weight="600">
              {category.name}
            </Text>
          </CategoryContainer>
        );
      }}
    />
  );
}
