import styles from './category.module.css';
import { CATEGORY_COLORS } from '../../utils/constants/categories'


const getTagStyle = (category: string): { color: string, borderColor: string } => {
    const categoryId = (category?.toLowerCase() || 'default') as keyof typeof CATEGORY_COLORS; //we can prevent this cast defining all the cetegories and setting a union type
    const currentCategory = CATEGORY_COLORS?.[categoryId] || CATEGORY_COLORS.default;
    return {
        color: currentCategory.textColor,
        borderColor: currentCategory.borderColor,
    }
}
export const Category = ({ category }: { category: string }) => {
    return <div className={styles?.['category']}>
        <div className={styles?.['tag']} style={getTagStyle(category)}>
            {category}
        </div>
    </div >;
}
