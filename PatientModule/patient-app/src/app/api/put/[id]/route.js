import pool from "../../../utils/dbconfig";
import {NextRequest, NextResponse } from "next/server";



export async function PUT(req) {
    const test_id = req.url.split("put/")[1];
    const {test_name, price} = await req.json();
    console.log(test_name,price)
    try {
      const result = await pool.query(`UPDATE test_price SET test_name= $1 , price = $2 WHERE test_id = $3`, [test_name, price, test_id]);
      console.log(result);
      
      if (result.rowCount === 0) {
        return NextResponse.json({ error: 'Record not found' }, { status: 404 });
      }
      
      return NextResponse.json({ message: 'Record updated successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error updating data:', error);
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
  }