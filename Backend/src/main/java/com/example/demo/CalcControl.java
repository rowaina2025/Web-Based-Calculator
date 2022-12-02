package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class CalcControl {
	
	private static CalcService calcService;
	
	public CalcControl(CalcService calcService) {CalcControl.calcService = calcService;}
	
	@GetMapping(value = "/OOP/two_op")
	@ResponseBody
	public static String post(@RequestParam String n) {
		n = calcService.twoOp(n);
		return n;
	}
	
	@GetMapping(value = "/OOP/neg")
	@ResponseBody
	public String addInv(@RequestParam String n) {
		n = calcService.addInv(n);
		return n;
	}
	
	@GetMapping("/OOP/mulInv")
	@ResponseBody
	public String mulInv(@RequestParam String n) {
		n = calcService.mulInv(n);
		return n;
	}
	
	@GetMapping("/OOP/sqrt")
	@ResponseBody
	public String sqrt(@RequestParam String n) {
		n = calcService.sqrt(n);
		System.out.println(n);
		return n;
	}
	
	@GetMapping("/OOP/pow2")
	@ResponseBody
	public String pow2(@RequestParam String n) {
		n = calcService.pow2(n);
		return n;
	}
	
	@GetMapping("/OOP/per")
	@ResponseBody
	public String per(@RequestParam String n) {
		n = calcService.per(n);
		return n;
	}
	
}
