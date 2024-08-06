import pool from "../../../utils/dbconfig";
import {NextRequest, NextResponse } from "next/server";

export async function DELETE(req) {
    const test_id = req.url.split("delete/")[1];
    
    try {
      const result = await pool.query("DELETE FROM test_price WHERE test_id = $1", [test_id]);
      console.log(result);
      
      if (result.rowCount === 0) {
        return NextResponse.json({ error: 'Record not found' }, { status: 404 });
      }
      
      return NextResponse.json({ message: 'Record deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error deleting data:', error);
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
  }