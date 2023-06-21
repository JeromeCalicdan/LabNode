import { db } from '../database/models';
import Product from '../database/models/product';

class ProductService {
    private static instance: ProductService;

    static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }
    findAll = async () => {
        const products: Product[] = await Product.findAll();
        return products;
    };

    findById = async (id: string) => {
        const existingProduct: Product | null = await Product.findByPk(id);
        return existingProduct;
    };
    save = async (object: any) => {
        // eslint-disable-next-line no-useless-catch
        try {
            if (!object && Object.keys(object.length == 0)) {
                throw new Error('Object must contain at least one property');
            }
            const product = await Product.create({ ...object });
            return product;
        } catch (err) {
            throw err;
        }
    };
    update = async (id: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            );
        }

        let existingProduct = await this.findById(id);
        if (!existingProduct) {
            throw new Error('product_not_found');
        }

        // eslint-disable-next-line no-useless-catch
        try {
            await Product.update(
                { ...object },
                {
                    where: { ProdID: id },
                }
            );

            existingProduct = await this.findById(id);
            return existingProduct;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (id: string) => {
        const existingProduct = await this.findById(id);
        if (!existingProduct) {
            throw new Error('product_not_found');
        }

        // eslint-disable-next-line no-useless-catch
        try {
            await existingProduct.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default ProductService;
