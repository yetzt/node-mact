
CC     = cc
CFLAGS = -O2 -Wall
INC    = -framework IOKit
EXEC   = bin/mact

build : $(EXEC)

clean : 
	rm $(EXEC)

$(EXEC) : src/smc.c
	$(CC) $(CFLAGS) $(INC) -o $@ $?
