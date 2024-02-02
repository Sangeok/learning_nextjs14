'use server';

export async function testGetData() {
    return {
        data: {
            message: "Server action was successful!"
        }
    }
}