import Logo from '../../components/Logo';
import Category from '../../components/Category';
import Description from '../../components/Description';
import Options from '../../components/Options';
import { ColumnI } from '../../types/responsiveTable';

export const PURCHARSE_HISTORY_COLUMNS: ColumnI[] = [
    {},
    {
        field: 'name',
        headerName: 'Name',
        className: 'highlight',
        style: {
            order: 2,
            flex: '5 1 auto',
        },
    },
    {
        field: 'location',
        headerName: 'Location',
        component: Logo,
        style: {
            order: 1,
        },
    },
    {
        field: 'purchaseDate',
        headerName: 'Purchase Date',
        mobileHeaderName: 'Purchase Date',
        valueGetter: ({ purchaseDate }: { purchaseDate: string }) => (new Date(purchaseDate)).toLocaleString('en-US', {
            timeZone: 'UTC',
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        style: {
            order: 5,
            flexBasis: '100%',
            whiteSpace: 'nowrap',
        },
    },
    {
        field: 'category',
        headerName: 'Category',
        component: Category,
        className: 'mobile-hidden',
        headerStyle: {
            textAlign: 'center',
        },
    },
    {
        field: 'description',
        headerName: 'Description',
        component: Description,
        className: 'secondary-content',
        style: {
            order: 4,
            flexBasis: '80%',
        },
    },
    {
        field: 'price',
        headerName: 'Price',
        className: 'primary-content',
        valueGetter: ({ price }: { price: number }) => price.toLocaleString('en-US', {
            style: "currency", currency: "USD"
        }),
    },
    {
        className: 'mobile-hidden',
        component: Options
    }
];