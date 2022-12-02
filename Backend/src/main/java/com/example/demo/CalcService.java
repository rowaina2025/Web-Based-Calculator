package com.example.demo;

import org.springframework.stereotype.Service;

@Service
public class CalcService implements Operations{
	private static String txt;
	private static double num1;
	private static double num2;
	private static CalcService clc = new CalcService();
	private static CalcModel calc = new CalcModel();
	
	public CalcService() {}
	
	@Override 
	public String mulInv(String n) {
		num1 = Double.parseDouble(n);
		if(num1 == 0)
			return "UNDEFINED!";
		num1 = 1 / num1;
		calc.setTxt(n);
		return Double.toString(num1);
	}
	
	@Override
	public String pow2(String n) {
		num1 = Double.parseDouble(n);
		num1 = Math.pow(num1, 2);
		calc.setTxt(n);
		return Double.toString(num1);
	}
	
	@Override
	public String sqrt(String n) {
		num1 = Double.parseDouble(n);
		if(num1 < 0)
			return "UNDEFINED!";
		num1 = Math.sqrt(num1);
		calc.setTxt(n);
		return Double.toString(num1);
	}
	
	@Override
	public String addInv(String n) {
		num1 = Double.parseDouble(n);
		num1 *= -1;
		calc.setTxt(n);
		return Double.toString(num1);
	}
	
	@Override
	public String per(String n) {
		num1 = Double.parseDouble(n);
		num1 /= 100;
		calc.setTxt(n);
		return Double.toString(num1);
	}
	
	@Override
	public void add() {
		num2 = num1 + num2;
		txt = Double.toString(num2);
	}

	@Override
	public void sub() {
		num2 = num1 - num2;
		txt = Double.toString(num2);
	}

	@Override
	public void mul() {
		num2 = num1 * num2;
		txt = Double.toString(num2);
	}

	@Override
	public void div() {
		if(num2 == 0.0) {
			txt = "UNDEFINED!";
			return;
		}
		num2 = num1 / num2;
		txt = Double.toString(num2);
	}

	public String twoOp(String t) {
		txt = t;
		calculate();
		calc.setTxt(t);
		return txt;
	}
	
	public static void parse(int i) { 
		int l = txt.length();
		num1 = Double.parseDouble((String)txt.substring(0, i));
		num2 = Double.parseDouble((String)txt.substring(i + 1, l));
	}
	
	public static void calculate() { 
		for(int i = 0; i < txt.length(); i++) {
			if(txt.charAt(i) == '+') {
				parse(i);
				clc.add();
				return;
			}
			else if(txt.charAt(i) == '_') {
				parse(i);
				clc.sub();
				return;
			}
			else if(txt.charAt(i) == '*') {
				parse(i);
				clc.mul();
				return;
			}
			else if(txt.charAt(i) == '/') {
				parse(i);
				clc.div();
				return;
			}
		}
	}
}
