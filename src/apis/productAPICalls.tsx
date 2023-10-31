import { GET_PRODUCT, GET_WINE } from "../modules/productModule";
import { Dispatch, AnyAction } from "redux";
import { Store } from "redux";


/* 공통으로 사용하는 상품 리스트 조회 API */
export const callProductAllListAPI = ({categoryCode}: { categoryCode: String }): (dispatch: Dispatch<AnyAction>, getState: () => Store<any, AnyAction>) => Promise<void> => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/productList/${categoryCode}`;

    return async (dispatch, getState) => {
      
        const response = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
        })
        .then(response => response.json());

        if (response.status === 200) {

            console.log("product list get response true")
           
            dispatch({ type: GET_PRODUCT, payload: response.data });

        } else {

            console.log("product list get response false")
        }
    };
};


/* 와인정보까지 함께 들고 오는 와인 상품용 조회 API */
export const callWineAllListAPI = ({categoryCode}: { categoryCode: String }): (dispatch: Dispatch<AnyAction>, getState: () => Store<any, AnyAction>) => Promise<void> => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/wineList/${categoryCode}`;

    return async (dispatch, getState) => {
      
        const response = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
        })
        .then(response => response.json());

        if (response.status === 200) {

            console.log("wine list get response true")
           
            dispatch({ type: GET_WINE, payload: response.data });

        } else {

            console.log("wine list get response false")
        }
    };
};