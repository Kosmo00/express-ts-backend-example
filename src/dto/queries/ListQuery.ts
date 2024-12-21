import { Expose, Transform, Type } from "class-transformer";
import "reflect-metadata";
import { Order } from "sequelize";
import logger from "../../services/logging/logger";

export class ListQuery {
    @Expose()
    @Type(() => Number)
    @Transform(({value}) => value ?? 10)
    limit!: number;
    
    @Expose()
    @Type(() => Number)
    @Transform(({value}) => value ?? 0)
    offset!: number;

    @Expose()
    @Type(() => String)
    order!: string;

    getOrder(allowedSort: string[]) : Order | void{
        if(!this.order) return;
        try{
            const sortModel = this.order.substring(1);
            if(allowedSort.indexOf(sortModel) !== -1){
                if(this.order[0] == '+'){
                    return [[sortModel, 'ASC']]
                } else if (this.order[0] == '-'){
                    return [[sortModel, 'DESC']]
                } else {
                    logger.warning('Bad Order in List Query.');
                }
            }
        }catch(err){
            logger.error('Error ocurred parsing order in ListQuery DTO', err);
        }
    }
}