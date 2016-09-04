<%@ page contentType="image/jpeg" language="java" import="java.util.*,java.awt.*,java.awt.image.*,javax.imageio.*" pageEncoding="utf-8"%>

<%!
    //获取随机颜色
	Color getRandColor(int fc,int bc){
		Random random = new Random();
		if(fc > 255){
			fc = 255;
		}
		if(bc < 255){
			bc = 255;
		}
		int r = fc +random.nextInt(bc-fc);
		int g = fc +random.nextInt(bc-fc);
		int b = fc +random.nextInt(bc-fc);
		
		
		return new Color(r,g,b);
	}

	//生成漢字
	String genWord(){
		String code = "";

        Random random = new Random();

        String[] rBase = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                "a", "b", "c", "d", "e", "f" };
        // 生成第1位的区码
        int r1 = random.nextInt(3) + 11; // 生成11到14之间的随机数
        String str_r1 = rBase[r1];
        // 生成第2位的区码
        int r2;
        if (r1 == 13) {
            r2 = random.nextInt(7); // 生成0到7之间的随机数
        } else {
            r2 = random.nextInt(16); // 生成0到16之间的随机数
        }
        String str_r2 = rBase[r2];
        // 生成第1位的位码
        int r3 = random.nextInt(6) + 10; // 生成10到16之间的随机数
        String str_r3 = rBase[r3];
        // 生成第2位的位码
        int r4;
        if (r3 == 10) {
            r4 = random.nextInt(15) + 1; // 生成1到16之间的随机数
        } else if (r3 == 15) {
            r4 = random.nextInt(15); // 生成0到15之间的随机数
        } else {
            r4 = random.nextInt(16); // 生成0到16之间的随机数
        }
        String str_r4 = rBase[r4];
        System.out.println(str_r1 + str_r2 + str_r3 + str_r4);

        // 将生成机内码转换为汉字
        byte[] bytes = new byte[2];
        // 将生成的区码保存到字节数组的第1个元素中
        String str_r12 = str_r1 + str_r2;
        int tempLow = Integer.parseInt(str_r12, 16);
        bytes[0] = (byte) tempLow;
        // 将生成的位码保存到字节数组的第2个元素中
        String str_r34 = str_r3 + str_r4;
        int tempHigh = Integer.parseInt(str_r34, 16);
        bytes[1] = (byte) tempHigh;

        code = new String(bytes); // 根据字节数组生成汉字
		return code;
	}
%>

<% 
	//设置页面不缓存
	response.setHeader("Pragma","no-cache");
	response.setHeader("Cache-Control","no-catch");
	response.setDateHeader("Expires",0);
	
	//在内存中创建图象
	int width = 90;
	int height = 30;
	BufferedImage image = new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);
	
	//创建图象
	Graphics g = image.getGraphics();
	//生成随机对象
	Random random = new Random();
	//设置背景色
	g.setColor(getRandColor(200,250));
	g.fillRect(0,0,width,height);
	//设置字体
	g.setFont(new Font("Tines Nev Roman",Font.PLAIN,18));
	//随机产生干扰线
	g.setColor(getRandColor(160,200));
	for(int i = 0; i < 255; i++){
		int x = random.nextInt(width);
		int y = random.nextInt(height);
		int xl = random.nextInt(12);
		int yl = random.nextInt(12);
	}
	//随机产生认证码,4位数字
	String sRand = "";
	for(int i = 0; i <4; i++){
		String rand = String.valueOf(  random.nextInt(10)   );
		//String rand=genWord();
		sRand  += rand;
		//将认证码显示到图象中
		g.setColor(new Color(20 + random.nextInt(110),20 + random.nextInt(110),20 + random.nextInt(110)));
		g.drawString(rand,18*i+6,    random.nextInt(15)+12   );
	}
	session.setAttribute("rCode",sRand);     //将产生的验证码存到session    rCode
	//图像生效
	g.dispose();
	//输出图像到页面
	ImageIO.write(image,"JPEG",response.getOutputStream());
	out.clear();
	out = pageContext.pushBody();
%>
